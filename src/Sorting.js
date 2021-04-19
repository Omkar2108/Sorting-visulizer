import { Component } from 'react';
import './Sorting.css';
import { getBubbleAnimation } from './Algorithms/bubble';
import { getHeapAnimation } from './Algorithms/heap';
import { getSelectionAnimation } from './Algorithms/selection';
import { getInsertionAnimation } from './Algorithms/insertion';
import { getMergeAnimation } from './Algorithms/merge';

const PRIMARY_COLOR = 'turquoise'; //Normal color of bars
const SECONDARY_COLOR = 'red'; //Color of bars when they are being compared

export class Sorting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            size: 35,
            speed: 50,
            color: "cyan"
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
        // console.log(array);
    }

    bubbleSort() {
        const [animation, array] = getBubbleAnimation(this.state.array);
        for (let i = 0; i < animation.length; i++) {
            const isColorChange = animation[i][0] === "compare1" || animation[i][0] === "compare2";
            const arraybar = document.getElementsByClassName("array-bar");
            if (isColorChange === true) {
                const [compare, index1, index2] = animation[i];
                const color = (compare === "compare1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const index1style = arraybar[index1].style;
                const index2style = arraybar[index2].style;
                setTimeout(() => {
                    index1style.backgroundColor = color;
                    index2style.backgroundColor = color;
                }, i * this.state.speed);
            }
            else {
                const [swap, index, height] = animation[i];
                if (index === -1) {
                    continue;
                }
                const indexstyle = arraybar[index].style;
                setTimeout(() => {
                    indexstyle.height = `${height}px`;
                }, i * this.state.speed);
            }
        }
    }

    heapSort() {
        const [animation, array] = getHeapAnimation(this.state.array);
        for (let i = 0; i < animation.length; i++) {
            const isColorChange = animation[i][0] === "compare1" || animation[i][0] === "compare2";
            const arraybar = document.getElementsByClassName("array-bar");
            if (isColorChange === true) {
                const [compare, index1, index2] = animation[i];
                const color = (compare === "compare1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const index1style = arraybar[index1].style;
                const index2style = arraybar[index2].style;
                setTimeout(() => {
                    index1style.backgroundColor = color;
                    index2style.backgroundColor = color;
                }, i * this.state.speed);
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
    }

    insertionSort() {
        const [animation, array] = getInsertionAnimation(this.state.array);
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
    }

    mergeSort() {
        const [animation, array] = getMergeAnimation(this.state.array);
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
                const indexstyle = arraybar[index].style;
                setTimeout(() => {
                    indexstyle.height = `${height}px`;
                }, i * this.state.speed);
            }
        }
    }

    selectionSort() {
        const [animation, array] = getSelectionAnimation(this.state.array);
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
                const indexstyle = arraybar[index].style;
                setTimeout(() => {
                    indexstyle.height = `${height}px`;
                }, i * this.state.speed);
            }
        }
        setTimeout(() => {

        })
    }

    render() {
        const { array, size, speed } = this.state;
        return (
            <div style={{ marginLeft: "100px", position: "absolute" }}>
                <input style={{ top: 0, marginLeft: '300px', width: '150px', cursor: "pointer", marginBottom: "50px" }} type="range" defaultValue={size} min="10" max="70" step="10" onChange={(e) => {
                    this.setState({ size: e.target.value });
                    this.resetArray(e.target.value);
                }} />
                <output style={{ color: "red" }}>{size} Elements</output>
                <input style={{ cursor: "pointer", marginLeft: "30px" }} type="range" defaultValue={speed} min="5" max="200" step="5" onChange={(e) => {
                    this.setState({ speed: e.target.value });
                }} />
                <output style={{ color: "red" }}>{speed} ms</output>
                <br />
                <button onClick={() => this.resetArray(size)} style={{ marginBottom: "50px", marginLeft: "25px", marginRight: "25px" }} >Generate New Array</button>
                <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                <button onClick={() => this.heapSort()}>Heap Sort</button>
                <button onClick={() => this.insertionSort()}>Insertion Sort</button>
                <button onClick={() => this.mergeSort()}>Merge Sort</button>
                <button>Quick Sort</button>
                <button onClick={() => this.selectionSort()}>Selection Sort</button>
                <br />
                <div className="array-container">
                    {array.map((value, ind) => {
                        const val = value + 'px';

                        return (
                            <div className="array-bar" key={ind} style={{ backgroundColor: { PRIMARY_COLOR }, height: `${val}` }} />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Sorting;
