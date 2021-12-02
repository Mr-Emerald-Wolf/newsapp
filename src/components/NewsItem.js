import React, { Component } from 'react'

export class NewsItem extends Component {


    render() {
        let imageUrl = this.props.articleData["media"];
        let title = (this.props.articleData["title"] == null ? " " : this.props.articleData["title"].slice(0, 60) + "...");
        let description = (this.props.articleData["summary"] == null ? " " : this.props.articleData["summary"].slice(0, 120) + "...");
        let newsUrl = this.props.articleData["link"];
        let author = this.props.articleData["author"];
        let time = this.props.articleData["published_date"];

        return (
            <>
                <div className="col-md-4 my-1">
                    <div className="card bg-custom-1">
                        <img src={imageUrl} className="card-img-top" alt="News Item" onError={event => {
                            event.target.src = "https://images.unsplash.com/photo-1638348197036-b112cb620c0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                            event.onerror = null
                        }} />
                        <div className="card-body">
                            <h5 className="card-title text-pink">{title}</h5>
                            <p className="card-text text-light">{description}</p>
                            <a href={newsUrl} className="btn btn-dark fw-bold">Read More</a>
                        </div>
                        <div className="card-footer">
                            <p className="text-gray">By {author === null ? "NewsNetwork" : author}</p>
                            <small className="text-gray">Published on {time}</small>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
