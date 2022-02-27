import React, { Component } from "react";
import BitCoinService from "../services/bitcoin.service.js";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

export default class BitCoinBlocks extends Component {
    constructor(props) {
        super(props);
        // this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveBlocks = this.retrieveBlocks.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.state = {
            blocks: [],
            size: 0
        };
    }

    componentDidMount() {
        this.retrieveBlocks();
    }

    // onChangeSearchTitle(e) {
    //     const searchTitle = e.target.value;

    //     this.setState({
    //         searchTitle: searchTitle
    //     });
    // }

    retrieveBlocks() {
        BitCoinService.getAll()
            .then(response => {
                this.setState({
                    blocks: response.data,
                    size: response.data.size
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshList() {
        this.retrieveBlocks();
    }

    rowEvents(id) {
        window.location.href = "/rawblock/" + id;  
    }

    render() {
        const { blocks } = this.state;

        return (
            <div className="list row">
                <Table striped bordered hover>
                <thead>
                    <tr>
                    <th scope="col">Hash</th>
                    <th scope="col">Time</th>
                    <th scope="col">Height</th>
                    </tr>
                </thead>
                <tbody>
                    {blocks &&
                            blocks.map((block, index) => (
                                <tr key={index} className = "table-row" onClick={() => this.rowEvents(block.hash)}>
                                    <td>{block.hash}</td>
                                    <td >{block.time}</td>
                                    <td >{block.height}</td>
                                </tr>
                    ))}
                </tbody>
                </Table>
            </div>
        );
    }
}