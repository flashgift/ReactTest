import React from 'react';
import JizonStyleList from './component/JizonStyleList';
import JizonStyleListItem from './component/JizonStyleListItem';



function App() {
    return (
        <div>
            <div style={{ backgroundColor: 'red', display: 'flex', flexDirection: 'column' }}>
                <div style={{ flex: '1 1 300px', backgroundColor: '#CF0' }}>
                    머리!
                </div>
                <div style={{ backgroundColor: 'red', display: 'flex' }}>
                    <div style={{ width: '300px', height: '1024px', overflow: 'auto', backgroundColor: 'rgb(175, 187, 202)' }}>
                        <JizonStyleList name="안녕하신가.">
                            <JizonStyleListItem name="아이템하나" />
                            <JizonStyleListItem name="아이템둘" />
                            <JizonStyleListItem name="아이템셋" />
                            <JizonStyleListItem >
                                <JizonStyleList name="안녕하신가.">
                                    <JizonStyleListItem name="아이템하나" />
                                    <JizonStyleListItem name="아이템둘" />
                                    <JizonStyleListItem name="아이템넷" />
                                    <JizonStyleListItem >
                                        <JizonStyleList name="안녕하신가.">
                                            <JizonStyleListItem name="아이템하나" />
                                            <JizonStyleListItem name="아이템둘" />
                                            <JizonStyleListItem name="아이템셋" />
                                            <JizonStyleListItem name="아이템넷" />
                                            <JizonStyleListItem name="아이템다섯" />
                                        </JizonStyleList>
                                    </JizonStyleListItem >
                                </JizonStyleList>
                            </JizonStyleListItem >
                            <JizonStyleListItem name="아이템넷" />
                            <JizonStyleListItem name="아이템다섯" />
                        </JizonStyleList>
                        <JizonStyleList name="안녕하신가.">
                            <JizonStyleListItem name="아이템하나" />
                            <JizonStyleListItem name="아이템둘" />
                            <JizonStyleListItem name="아이템셋" />
                            <JizonStyleListItem name="아이템넷" />
                            <JizonStyleListItem name="아이템다섯" />
                        </JizonStyleList>
                    </div>
                    <div style={{ flex: '1 1 auto', backgroundColor: 'rgb(0, 119, 255)' }}>
                        발!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
