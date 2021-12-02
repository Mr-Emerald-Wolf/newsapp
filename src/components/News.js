import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
//COMPONENT DID MOUNT FIRES AFTER AFTER  RENDER ==== NO DATA FOR PROPS IN RENDER ==== ERROR DUE TO NO VARIABLE FOUND 
//DON"T PASS PROPS IN RENDER WHICH USE STATE BECAUSE COMPONENT DID MOUNT FIRES THEM 
//OTHERWISE RENDER WILL NOT GET 
export class News extends Component {

    static defaulProps = {
        pageSize: 12,
        country: 'US',
        category: "news",

    }
    static propTypes = {
        pageSize: PropTypes.number,
        country: PropTypes.string,
        category: PropTypes.string

    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: true,
            currentPage: 1,
            totalPages: 1,
            totalResults: 50
        }
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    fetchData = async () => {
        let url = `https://api.newscatcherapi.com/v2/latest_headlines?countries=US&lang=en&topic=${this.props.category}&page_size=9&page=${this.state.currentPage + 1}`
        const req = { headers: { 'x-api-key': '$api_key' } };

        let data = await fetch(url, req);
        let parsedData = await data.json();
        let uniqueData = this.removeDuplicates((this.state.articles).concat(parsedData.articles))

        this.setState({
            currentPage: this.state.currentPage + 1,
            articles: uniqueData,
            loading: false
        });
        

    }
    fetchMore = () => {

        setTimeout(() => { this.fetchData() }, 1000);
        //console.log("Hit1");
        //console.log(this.state.articles.length);

    }


    async componentDidMount() { //API Fetch here
        const reqOptions = { headers: { 'x-api-key': '$api_key' } };
        let url = `https://api.newscatcherapi.com/v2/latest_headlines?countries=US&lang=en&page_size=9&page=1&topic=${this.props.category}`
        let data = await fetch(url, reqOptions);
        let parsedData = await data.json();
        let pagesAvailable = Math.ceil((parsedData.total_hits) / this.props.pageSize);
        let uniqueData = this.removeDuplicates(parsedData.articles)


        this.setState({
            articles: uniqueData,
            totalPages: pagesAvailable,
            loading: false

        });
        

        // //console.log(this.state.currentPage);
        // console.log(totalPages);
        //console.log(url);
        //console.log(data);
        //console.log(parsedData.articles);
        //console.log(parsedData.total_hits);
        // //console.log("CDM");
        // console.log(this.state.data.slice(0,6));
        // console.log(this.state.data.slice({this.props.pageSize},18));

    }

    removeDuplicates = (array) => {
        let unique = [];
        let keys = [];
        let titles = [];
        for (let x in array) {
            //console.log((array[x])["title"]);
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
        //console.log(titles.includes("5 experiential gifts for everyone on your list") );
        

        return unique;


    }

    render() {
        return (

            <>
                <h1 className="text-pink text-center display-4 m-2">Top Headlines{(this.props.category !== "news") ? (" in " + this.capitalizeFirstLetter(this.props.category)) : ""}</h1>
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
                    <div className="container my-3">
                        <div className="row my-1">
                            {/*this.state.loading && <Spinner />*/}
                            {!this.state.loading && this.state.articles.map((element) => {
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
