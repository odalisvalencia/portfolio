import React from 'react'
import styled from 'styled-components';
import resume from '../img/web.png';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="" />
            </div>
            <div className="right-content">
                <h4>Soy <span>Odalis Valencia</span></h4>
                <p className="paragraph">
                    Soy una persona con una capacidad de compromiso y liderazgo, con decisión e iniciativa, excelente relaciones interpersonales y trabajo en equipo, habilidad en la realización de actividades, planeación y organización, rápido aprendizaje.
                    Persona honesta, comprometida y responsable en la ejecución de todas las actividades asignadas, creativa, respetuosa y tolerante, con principios éticos y morales que me han permitido destacarme en todos los ámbitos en los cuales me desenvuelvo.

                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Nombre completo</p>
                        <p>Años</p>
                        <p>Nacionalidad </p>
                        <p>Idiomas </p>
                        <p>Residencia</p>
                        <p>Servicio</p>
                    </div>
                    <div className="info">
                        <p>: Odalis Valencia Juvinao</p>
                        <p>: 21</p>
                        <p>: Colombiana </p>
                        <p>: Español, English </p>
                        <p>: Barranquilla, Atlántico, colombia </p>
                        <p>: Freelance</p>
                    </div>
                </div>
                <a href="https://drive.google.com/file/d/1XoUHJLygqVEqtsYQcgTQxFlRoJLYo8nK/view?usp=sharing">
                    <PrimaryButton title={'Download Cv'} />
                </a>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
