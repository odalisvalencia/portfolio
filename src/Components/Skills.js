import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'MIS HABILIDADES'} span={'MIS HABILIDADES'} />
                <InnerLayout>
                    <div className="skills">
                    <ProgressBar 
                            title={'Illustrator'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'Adobe XD'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'HTML5'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'Adobe Photoshop'}
                            width={'93%'}
                            text={'93%'}
                        />
                        <ProgressBar 
                            title={'Wordpress'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'JAVASCRIPT'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'75%'}
                            text={'75%'}
                        />
                      
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
