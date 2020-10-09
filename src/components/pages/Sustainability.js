import React from 'react'
import styled from "styled-components";
import SusBrandPin from "../img/sustainable-pin.svg"
import VintagePin from "../img/vintage-pin.svg"
import LocalPin from "../img/local-pin.svg"
import RentingPin from "../img/rent-pin.svg"
import SusBrown from "../img/_S-brown_use.svg"

function Shops() {
    return (
        <Container >
            <h1>Sustainability</h1>
            <br />
            <p>‘The level of sustainability in the fashion industry mirrors the values we have as a society.’</p>
            <br />
            <p>Is style & comfort more important to us than next generations’ quality of life? Do we choose retail therapy over than well-being of third world people? Some people might not care and Conscious Sweater won’t change that. We can
                however help those of you who do care.</p>
            <br />
            <p>The best thing to make fashion industry more sustainable is to quit shopping. We however feel this is way too big of a change right now. Therefore we only ask you to consider each of your fashion purchases twice. When the need
                to shop wins then choose vintage or brands producing clothes ethically & ecologically rather then fast fashion. Use our map to find them easily. </p>
            <br />
            <p>WHAT KIND OF SHOPS CAN MAKE IT IN CONSCIOUS SWEATER MAP</p>
            <br />
            <p>We add shops selling vintage fashion, sustainable fashion boutiques, shops selling local produce, fashion rental services and we also have a special category for shops selling conventional fashion and a selection of sustainable brands.
                Yes, the last one is a bit tricky!</p>
            <PinWrapper>
                <PinUl>
                    <PinLi>
                        <ImgDiv><img src={SusBrandPin} alt="" style={{ width: "50px", height: "50px" }} /></ImgDiv>
                        <LiSpan>Sustainable fashion shops, <strong>boutiques, brands & designers focused on selling
                             clothes that are brand new and made in an ecological & ethical way.</strong></LiSpan>
                    </PinLi>

                    <PinLi>
                        <ImgDiv><img src={VintagePin} alt="" style={{ width: "50px", height: "50px" }} /></ImgDiv>
                        <LiSpan>Vintage shops<strong> sell used clothes whose impact is several times lower than that of any new clothes’.</strong></LiSpan>
                    </PinLi>
                    <PinLi>
                        <ImgDiv><img src={LocalPin} alt="" style={{ width: "50px", height: "50px" }} /></ImgDiv>
                        <LiSpan>Local fashion<strong> means fashion designed and produced(!) both locally & ecologically.</strong></LiSpan>
                    </PinLi>
                    <PinLi>
                        <ImgDiv><img src={RentingPin} alt="" style={{ width: "50px", height: "50px" }} /></ImgDiv>
                        <LiSpan>Rental services<strong> usually offer more festive clothes used multiple times by multiple people.</strong></LiSpan>
                    </PinLi>
                    <PinLi>
                        <ImgDiv><img src={SusBrown} alt="" style={{ width: "30px", height: "50px", marginLeft: "12px" }} /> </ImgDiv>
                        <LiSpan>Shops selling some sustainable brands<strong> choose to sell some sustainable brands,
                        even though their core value is not sustainability. We spent many days & nights discussing whether or not to include those shops and we ended up adding them, under a completely different brown pin. That way,
                             they don’t get mixed up with shops having sustainability as a core value.</strong></LiSpan>
                    </PinLi>
                </PinUl>
            </PinWrapper>
            <br />
            <p>HOW WE SELECT THE SHOPS</p>
            <p>We only allow shops focusing on fashion that doesn’t harm the planet & people to be on our map. That means we look into: 1. how fashion is made from an ecological perspective and 2.who makes
                the clothes and how: was it produced ethically? </p>
            <br />
            <h2>ECOLOGICAL ASPECT </h2>
            <br />
            <p>When scanning sustainable fashion shops for ecological aspect we want to know: <br />
             What are the fabrics made of and how?<br />
             Do THEY NOT contain toxic chemicals?<br />
             Do factories treat the waste water well? <br />
             We first look at the shop’s philosophy &
             values and then we investigate what brands it sells.
             Knowing the history of different brands worldwide helps us recognise which of them are really committed to only producing sustainable fashion long term. Then we focus on looking for internationally recognised certifications such as GOTS & Econyl etc. that prove the brand and the shop are choosing the best & most sustainable material alternative possible. Still, those certifications are not available for all types of fabrics and, therefore, we also need to trust brands and their statements about sustainability.
             Many of them present their garment supply chain, which means we can find the specific factory where the piece was made.
            </p>
            <br />
            <p>With sustainable brands, designers and local fashion, we ask the same questions and investigate the same ecological aspects of the used materials. Given that those might be very small, businesses rather than internationally recognised brands, we often get in touch directly
                with them to check on their practices.</p>
            <br />
            <p>With vintage shops and rental services, we consider them as having no ecological impact. Those shops give already used and tossed clothes a new life, so no new resources are used. The only downside here is the transport between countries usually within Europe or the US. Compared with producing & transporting new clothes, the impact is still very low.
                From an ecological point of view, we always recommend & support choosing first used clothes. </p>
            <br />
            <h3>ETHICAL ASPECT</h3>
            <p>We don’t want our clothes to be made by underpaid people, who cannot afford to live, don’t work in safe conditions and we especially don’t want clothes made by children. We, therefore, check sustainable & local shops’ values and see how much they care. It’s very common that owners of brands and shops personally visit the factories, know the owners and meet some of the people making the clothes. Some shops & brands share their garment’s supply chain which is only a positive sign showing that brands know all of the information (that’s not the case for fast fashion brands) and also that they don’t have anything to hide. Some certificates as GOTS and Fairtrade focus on the social aspect of the production too. They guarantee fair wages and safe conditions for the workers, so we also check whether the clothes in the shop are certified. As for vintage shops and rented fashion, we again consider them to create an ethically positive impact.</p>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin:0;
    padding:0;
    width:100vw;
    height: 100vh;
    justify-content: center!important;
    align-items: center!important;
    background-color: var(--lavender);

    @media only screen and (max-width: 768px){
        width: 100%;
    }
    
    h1 {
    position:relative;
    font-weight: bold;
    text-transform: uppercase;
    text-align:center!important;
    font-size: 30px;
    color: blue;
/*     margin-top: 30px;
    transform: translate(-50% , -50%); */
    top:50%;
    transform: translate(-50% , -50%);

    @media only screen and (max-width: 768px){
    font-size: 20px;
    justify-content: center;
    /* margin-top: 20px; */
    /* margin-left: 140px; */
}
}  
p {
    font-family:  "adobe-clean", sans-serif;
    font-size: 18px;
    letter-spacing: 0.01em;
    padding-left: 20px;
    padding-right: 20px;
    width: 750px;
    text-align: justify;
    word-break: keep-all;
    color: blue;
    @media only screen and (max-width: 768px){
    font-size: 12.5px;
    margin-left:-5px;
    margin-top: 5px;
    width: 300px;
    letter-spacing: none;


}
}

.shop-details {
    margin-top: 20px;
}


`

const PinWrapper = styled.div`
 font-family:  "adobe-clean", sans-serif;
display: flex;
flex-flow: row;
padding: 20px;
justify-content: start;
margin: 20px 80px 40px 20px;
box-sizing: border-box;
width: 600px;
height: 550px;
border:  none;
text-decoration: none;
background: transparent!important;

background-origin: padding-box;
background-color: var(--lavender);
color: var(--blue);
border-radius: none;
display: inline-block;


@media only screen and (max-width: 768px){
    font-size: 12.5px;
    margin: 50px 50px 0px 80px;

    letter-spacing: none;
}
`;

const PinUl = styled.ul`
  padding: 0
`
const PinLi = styled.li`
 list-style-type: none;
    width: 45em;
`
const LiSpan = styled.span`
width:60%;
height: 75px;
font-size:16px;
text-transform:none!important;
margin: 13px 0px 5px -270px;
float:right;
padding: 2px;
position:relative;
overflow:hidden;
.bold{
    font-weight:bold;
    text-transform:none;
}

`
const ImgDiv = styled.div`
width:50%;
height:40px; 
padding:5px;
margin: 10px 0px 5px 5px;
float:left;
position:relative;
`
const ImgPin = styled.image`
  position:absolute;
  top:50%;
  overflow:hidden;
`

export default Shops
