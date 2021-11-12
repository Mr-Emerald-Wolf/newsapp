import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let imageUrl = this.props.articleData["urlToImage"];
        let title = this.props.articleData["title"].slice(0,40);
        let description = this.props.articleData["description"].slice(0,80);
        let newsUrl = this.props.articleData["url"];

        return (
            <>
                <div className="col-md-4 my-1">
                    <div className="card bg-custom-1">
                        <img src={imageUrl} className="card-img-top" alt="News Item" />
                        <div className="card-body">
                            <h5 className="card-title text-pink">{title}...</h5>
                            <p className="card-text text-light">{description}...</p>
                            <a href={newsUrl} className="btn btn-dark fw-bold">Read More</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
