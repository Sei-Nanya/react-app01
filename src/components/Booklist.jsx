import React, { useState, useEffect } from 'react'; // 追加


const Booklist = props => {
    const [bookData, setBookData] = useState(null);   // ここから追加
    useEffect(() => {
        const result = props.getData?.(props.language).then(response => setBookData(response));
    }, [props])                                       // ここまで追加
    return (
        <div>
            <ul>
                {     // このあたり編集
                    bookData === null

                        ? <p>now loading...</p>

                        : bookData.data.items.map((x, index) =>
                            <li>
                                <p key={index}>書籍名：{x.volumeInfo.title}</p>
                                <p key={index}>著者：{x.volumeInfo.authors}</p>
                                <p key={index}>出版日：{x.volumeInfo.publishedDate}</p>
                                {
                                    x.volumeInfo.imageLinks === undefined
                                        ? <p>"書籍画像なし"</p>
                                        : <img key={index} src={x.volumeInfo.imageLinks.thumbnail}></img>
                                }
                            </li>

                        )
                }
            </ul >
        </div >
    );
}
export default Booklist;