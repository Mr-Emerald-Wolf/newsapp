import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
//COMPONENT DID MOUNT FIRES AFTER AFTER  RENDER ==== NO DATA FOR PROPS IN RENDER ==== ERROR DUE TO NO VARIABLE FOUND 
//DON"T PASS PROPS IN RENDER WHICH USE STATE BECAUSE COMPONENT DID MOUNT FIRES THEM 
//OTHERWISE RENDER WILL NOT GET 
export class News extends Component {

    static defaultProps = {
        pageSize: 12,
        category: "news",

    }
    static propTypes = {
        pageSize: PropTypes.number,
        category: PropTypes.string

    }

    constructor() {
        super();
        this.state = {
            articles: [],
            currentPage: 0,
            totalPages: 1,
            totalResults: 54
        }
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    fetchData = async () => {
        

        let data = await fetch(`https://free-news.p.rapidapi.com/v1/search?q=${this.props.category}%20&lang=en&page=${this.state.currentPage + 1}&page_size=9`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-news.p.rapidapi.com",
                "x-rapidapi-key": "5f35646e20msh6b6a968b2491722p161b2cjsn148763083eda"
            }
        })
        let parsedData = await data.json();
        let uniqueData = this.removeDuplicates((this.state.articles).concat(parsedData.articles))

        this.setState({
            currentPage: this.state.currentPage + 1,
            articles: uniqueData,
        });



    }


    fetchMore = () => {
        setTimeout(() => { this.fetchData() }, 500);
    }

    componentDidMount() { //API Fetch here
        this.timeout = setTimeout(() => { this.fetchData() }, 500);
    }
    componentWillUnmount() {
        clearTimeout(this.timeout)
    }
    removeDuplicates = (array) => {
        let unique = [];
        let keys = [];
        let titles = [];
        for (let x in array) {
            let newTitle = (array[x])["title"];
            if (newTitle == null) {
                newTitle = "";
            }
            if ((!(titles.includes(newTitle))) && !(keys.includes((array[x])["link"]))) {
                keys.push((array[x])["link"]);
                titles.push((array[x])["title"]);
                unique.push(array[x]);
            }
        }
        return unique;


    }

    render() {
        return (

            <>
                <h1 className="text-pink text-center display-4 m-3">Top Headlines{(this.props.category !== "us") ? (" in " + this.capitalizeFirstLetter(this.props.category)) : ""}</h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length} //This is important field to render the next data
                    next={this.fetchMore}
                    hasMore={this.state.articles.length <= this.state.totalResults}
                    loader={<Spinner />}
                    endMessage={
                        <div className="container d-flex my-3 justify-content-center">
                            <p className="text-pink display-5 fw-bold">Yay! You have reached the end...</p>
                        </div>
                    }

                >
                    <div className="container my-2">
                        <div className="row my-1">
                            {this.state.articles.map((element) => {
                                return (<NewsItem key={element.link} articleData={element} />)
                            })}
                        </div>
                    </div>
                </InfiniteScroll>



            </>

        )
    }
}

export default News
