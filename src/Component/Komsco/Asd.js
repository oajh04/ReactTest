import React, {Component} from 'react';
import axios from 'axios';

class Asd extends Component {
    state = {selectedFiles: null}

    fileHandler = (e) => {
        const files = e.target.files;
        this.setState({
            selectedFiles: files
        })
    };

    onClickHandler = (e) => {
        const formData = new FormData();
        formData.append(
            "file",
        this.state.selectedFiles
        );
        const config = {
        headers: {
            "content-type": "multipart/form-data"
        }
        };
    };

    render() {
        return (
        <div className="App">
            <input type="file" name="noticeFile" multiple onChange={this.fileChangedHandler} />
            <button onClick={this.onClickHandler}>전송하기</button>
        </div>
        );
    }
}
  
  export default Asd;