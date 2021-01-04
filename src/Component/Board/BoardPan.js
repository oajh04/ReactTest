import react from 'react';
import './BoardPan.css';
import Board from './Board';
import Card from './Card';

const BoardPan = () => {
    return (
        <div >
            <main className="flexbox">

                <Board id="board-1" className="board">
                    <div className="card">1번 슬롯</div>
                    <Card id="card-1" className="card" draggable="true">
                        <p>Card one</p>
                    </Card>
                </Board>

                <Board id="board-2" className="board">
                    <div className="card">2번 슬롯</div>
                    <Card id="card-2" className="card" draggable="true">
                        <p>Card two</p>
                    </Card>
                </Board>

                <Board id="board-3" className="board">
                    <div className="card">3번 슬롯</div>
                    <Card id="card-3" className="card" draggable="true">
                        <p>Card three</p>
                    </Card>
                    <Card id="card-4" className="card" draggable="true">
                        <p>Card four</p>
                    </Card>
                </Board>
            </main>
        </div>
    )
}

export default BoardPan;