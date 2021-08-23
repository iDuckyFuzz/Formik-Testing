import React from 'react';
import styled from 'styled-components'

const StyledContainer = styled.div`
display:flex;
flex-wrap:wrap;
`

const StyledDiv = styled.div`
display:flex;
flex-wrap:wrap;
border-radius: 5px;
border: 1px solid black;
width: 180px;
margin: 10px;
`

const Styledh1 = styled.h1`
width:100%
`

const Styledh2 = styled.h2`
width:100%
`

const Styledp = styled.p`
width:100%
`


const sites = [{ name: 'Twitter', profile: 'SWils1990', desc: 'Check me out on Twitter' }, { name: 'Instagram', profile: 'Swilson1990', desc: 'Check me out on Instagram' }, { name: 'GitHub', profile: 'iDuckyFuzz', desc: 'Check me out on GitHub' }]

const About = () => {
    return (
        <>
            <h1>About</h1>
            <p>I am a junior software developer, working for Capital One Europe PLC.</p>
            <StyledContainer>
                {
                    sites.map((site, i) => (
                        <Card key={i} name={site.name} profile={site.profile} desc={site.desc}></Card>
                    ))
                }
            </StyledContainer>
        </>
    );
};

const Card = (props) => {
    return (
        <StyledDiv>
            <Styledh1>{props.name}</Styledh1>
            <Styledh2>{props.profile}</Styledh2>
            <Styledp>{props.desc}</Styledp>
        </StyledDiv>
    );
};

export default About;