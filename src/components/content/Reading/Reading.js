import React, { Fragment } from 'react';
import Header from "../../shared/header/Header";
import Submenu from '../../layouts/submenu-layout/SubmenuLayout';
import './Reading.scss';

const Reading = (props) => {
    return (
        <Fragment>
            <Header />
            <Submenu />
            <div className='Reading'>
                <div className='container'>
                    <div className='student_data'>
                        <h1 className='student_name'>{props.name}</h1>
                        <div className='course_data'>
                            <p className='day'>{props.days}</p>
                            <p className='next_lesson'>{props.lesson}</p>
                            <h2 className='module'>{props.module}</h2>
                        </div>
                    </div>
                    <h1 className='title'>
                        Reading Modul # Lesson #
                    </h1>
                    <div className='lang'>
                        <button className='lang_rus language'>Rus</button>
                        <button className='lang_eng language'>Eng</button>
                    </div>
                    <div className='main_content'>
                        <div className='introduction_text'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a 
                            type specimen book. It has survived not only five centuries, but also the 
                            leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets 
                            containing Lorem Ipsum passages, and more recently with desktop 
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                        <div className='Question'>
                            <div className='types'>
                                <p className='question_types_title'>Types of questions. Listening</p>
                                <ul className='question_list'>
                                    <li className='question'>Form completion</li>
                                    <li className='question'>Note completion</li>
                                    <li className='question'>Table completion</li>
                                    <li className='question'>Flow-chart completion</li>
                                    <li className='question'>Plan labeling</li>
                                    <li className='question'>Map labeling</li>
                                    <li className='question'>Diagram labeling</li>
                                    <li className='question'>Matching</li>
                                    <li className='question'>Multiple choices</li>
                                    <li className='question'>Sentence completion</li>
                                    <li className='question'>Short answer question</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Reading;