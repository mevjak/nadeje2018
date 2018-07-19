import React from 'react'


class ArticleMeta extends React.Component {
    render() {
        const meta = this.props.meta;

        return (
            <p className="author">
                Autor {meta.author} &bull; Publikováno {meta.date}
            </p>
        )
    }
}

export default ArticleMeta