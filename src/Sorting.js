import { Component } from 'react';
import './Sorting.css';
import { getBubbleAnimation } from './Algorithms/bubble';
import { getHeapAnimation } from './Algorithms/heap';
import { getSelectionAnimation } from './Algorithms/selection';
import { getInsertionAnimation } from './Algorithms/insertion';
import { getMergeAnimation } from './Algorithms/merge';
import { getQuickAnimation } from './Algorithms/quick';

const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';

export class Sorting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            size: 35,
            speed: 50,
            color: "cyan",
        }
    }
    componentDidMount() {
        this.resetArray(this.state.size);
    }

    resetArray(size) {
        const array = [];
        for (let i = 0; i < size; i++) {
            array.push(parseInt(Math.random() * (600) + 5));
        }
        this.setState({ array });
    }

    animate(animation, array) {
        for (let i = 0; i < animation.length; i++) {
            const isColorChange = animation[i][0] === "compare1" || animation[i][0] === "compare2";
            const arraybar = document.getElementsByClassName("array-bar");
            if (isColorChange === true) {
                const [compare, index1, index2] = animation[i];
                if (index1 && index2) {
                    const color = (compare === "compare1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                    const index1style = arraybar[index1].style;
                    const index2style = arraybar[index2].style;
                    setTimeout(() => {
                        index1style.backgroundColor = color;
                        index2style.backgroundColor = color;
                    }, i * this.state.speed);
                }
            }
            else {
                const [swap, index, height] = animation[i];
                if (arraybar[index] === undefined) {
                    continue;
                }
                const indexstyle = arraybar[index].style;
                setTimeout(() => {
                    indexstyle.height = `${height}px`;
                }, i * this.state.speed);
            }
        }
        setTimeout(() => {
            this.setState({ array: array });
            this.enable();
        }, (animation.length * this.state.speed));
    }

    bubbleSort() {
        const [animation, array] = getBubbleAnimation(this.state.array);
        this.disable();
        this.animate(animation, array);
    }

    heapSort() {
        const [animation, array] = getHeapAnimation(this.state.array);
        this.disable();
        this.animate(animation, array);
    }

    insertionSort() {
        const [animation, array] = getInsertionAnimation(this.state.array);
        this.disable();
        this.animate(animation, array);
    }

    mergeSort() {
        const [animation, array] = getMergeAnimation(this.state.array);
        this.disable();
        this.animate(animation, array);
    }

    quickSort() {
        let [animation, array] = getQuickAnimation(this.state.array);
        this.disable();
        this.animate(animation, array);
    }

    selectionSort() {
        const [animation, array] = getSelectionAnimation(this.state.array);
        this.disable();
        this.animate(animation, array);
    }

    isSorted(array) {
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                return false;
            }
        }
        return true;
    }

    disable() {
        document.getElementById("generate").disabled = true;
        document.getElementById("bubble").disabled = true;
        document.getElementById("heap").disabled = true;
        document.getElementById("insertion").disabled = true;
        document.getElementById("merge").disabled = true;
        document.getElementById("quick").disabled = true;
        document.getElementById("selection").disabled = true;
        document.getElementById("size").disabled = true;
        document.getElementById("speed").disabled = true;
    }

    enable() {
        document.getElementById("generate").disabled = false;
        document.getElementById("bubble").disabled = false;
        document.getElementById("heap").disabled = false;
        document.getElementById("insertion").disabled = false;
        document.getElementById("merge").disabled = false;
        document.getElementById("quick").disabled = false;
        document.getElementById("selection").disabled = false;
        document.getElementById("size").disabled = false;
        document.getElementById("speed").disabled = false;
    }

    render() {
        const { array, size, speed } = this.state;
        return (
            <div style={{ marginLeft: "100px", position: "absolute", justifyContent: 'center' }}>
                <input id="size" style={{ top: 0, marginLeft: '300px', width: '150px', cursor: "pointer", marginBottom: "50px" }} type="range" defaultValue={size} min="10" max="70" step="10" onChange={(e) => {
                    this.setState({ size: e.target.value });
                    this.resetArray(e.target.value);
                }} />
                <output style={{ color: "red" }}>{size} Elements</output>
                <input id="speed" style={{ cursor: "pointer", marginLeft: "30px" }} type="range" defaultValue={speed} min="5" max="200" step="5" onChange={(e) => {
                    this.setState({ speed: e.target.value });
                }} />
                <output style={{ color: "red" }}>{speed} ms</output>
                <br />
                <button id="generate" onClick={() => this.resetArray(size)} style={{ marginBottom: "50px", marginLeft: "25px", marginRight: "25px" }} >Generate New Array</button>
                <button id="bubble" onClick={() => this.bubbleSort()} >Bubble Sort</button>
                <button id="heap" onClick={() => this.heapSort()}>Heap Sort</button>
                <button id="insertion" onClick={() => this.insertionSort()}>Insertion Sort</button>
                <button id="merge" onClick={() => this.mergeSort()}>Merge Sort</button>
                <button id="quick" onClick={() => this.quickSort()}>Quick Sort</button>
                <button id="selection" onClick={() => this.selectionSort()}>Selection Sort</button>
                <button style={{ marginLeft: 25 }} onClick>Stop</button>
                <br />
                <div className="array-container" style={{ position: "fixed", marginLeft: 100, marginBottom: 20 }}>
                    {array.map((value, ind) => {
                        const val = value + 'px';
                        let color = this.isSorted(array) ? "rgba(128, 255, 0)" : "cyan";
                        return (
                            <div className="array-bar" key={ind} style={{ backgroundColor: `${color}`, height: `${val}`, position: 'relative' }} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Sorting;
