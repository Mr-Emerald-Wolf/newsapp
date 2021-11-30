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
        let url = `https://api.newscatcherapi.com/v2/latest_headlines?countries=US&topic=${this.props.category}&page_size=9&page=${this.state.currentPage + 1}`
        const req = { headers: { 'x-api-key': 'll0DexesayjJrMbd6BBiRVQb70kXHARxgSGpNwFXgIo' } };

        let data = await fetch(url, req);
        let parsedData = await data.json();

        this.setState({
            currentPage: this.state.currentPage + 1,
            data: this.removeDuplicates(parsedData.articles),
            articles: this.state.articles.concat(parsedData.articles),
            loading: false
        });
        

    }
    fetchMore = () => {

        setTimeout(() => { this.fetchData() }, 1000);
        //console.log("Hit1");
        //console.log(this.state.articles.length);

    }


    async componentDidMount() { //API Fetch here
        const reqOptions = { headers: { 'x-api-key': 'll0DexesayjJrMbd6BBiRVQb70kXHARxgSGpNwFXgIo' } };
        let url = `https://api.newscatcherapi.com/v2/latest_headlines?countries=US&page_size=9&page=1&topic=${this.props.category}`
        let data = await fetch(url, reqOptions);
        let parsedData = await data.json();
        let pagesAvailable = Math.ceil((parsedData.total_hits) / this.props.pageSize);

        this.setState({
            data: parsedData.articles,
            articles: this.removeDuplicates(parsedData.articles),
            totalPages: pagesAvailable,
            //totalResults: parsedData.total_hits,
            loading: false

        });
        

        // //console.log(this.state.currentPage);
        // console.log(totalPages);
        //console.log(url);
        //console.log(data);
        //console.log(parsedData.articles);
        //console.log(parsedData.totalResults);
        // //console.log("CDM");
        // console.log(this.state.data.slice(0,6));
        // console.log(this.state.data.slice({this.props.pageSize},18));

    }

    removeDuplicates = (duplicates) => {
        const flag = {};
        const unique = [];
        duplicates.forEach(elem => {
            if (!flag[elem.title]) {
                flag[elem.title] = true;
                unique.push(elem);
            }
        });
        //console.log(flag);
        
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
