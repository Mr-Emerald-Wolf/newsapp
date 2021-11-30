import React, { Component } from 'react'

export class NewsItem extends Component {
    

    render() {
        let imageUrl = this.props.articleData["media"];
        let title = (this.props.articleData["title"]==null ? " ": this.props.articleData["summary"]).slice(0,60);
        let description = (this.props.articleData["summary"]==null ? " ": this.props.articleData["summary"]).slice(0,120);
        let newsUrl = this.props.articleData["link"];
        let author = this.props.articleData["author"];
        let time = this.props.articleData["published_date"];

        return (
            <>
                <div className="col-md-4 my-1">
                    <div className="card bg-custom-1">
                        <img src={imageUrl} className="card-img-top" alt="News Item" />
                        <div className="card-body">
                            <h5 className="card-title text-pink">{title}...</h5>
                            <p className="card-text text-light">{description===null ? null : description+"..."}</p>
                            <a href={newsUrl} className="btn btn-dark fw-bold">Read More</a>
                        </div>
                        <div className="card-footer">
                            <p className="text-gray">By {author===null ? "NewsNetwork" : author}</p>
                            <small className="text-gray">Published on {time}</small>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
