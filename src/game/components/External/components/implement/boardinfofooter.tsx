import { CardDetailFooter } from './carddetailfooter';

export function BoardInfoFooter() {
    const background =
        'linear-gradient(180deg, #009DF5 0%, #012468 124.17%), linear-gradient(0deg, rgba(103, 101, 101, 0.49) -14.17%, rgba(255, 249, 249, 0.70) 109.17%)';
    const backgroundRed = 'linear-gradient(0deg, #59001B 0.84%, #F30049 99.16%)';
    return (
        <>
            {/*BLUE PLAYER*/}
            <CardDetailFooter
                symbol="tie0"
                forceRight={true}
                textContent="150:1"
                textHeader="0"
                border="1px solid #0189DE"
                background={background}
            />
            <CardDetailFooter
                symbol="tie1"
                forceRight={true}
                textContent="215:1"
                textHeader="1"
                border="1px solid #0189DE"
                background={background}
            />
            <CardDetailFooter
                symbol="tie2"
                forceRight={true}
                textContent="220:1"
                textHeader="2"
                border="1px solid #0189DE"
                background={background}
            />
            <CardDetailFooter
                symbol="tie3"
                forceRight={true}
                textContent="200:1"
                textHeader="3"
                border="1px solid #0189DE"
                background={background}
            />
            <CardDetailFooter
                symbol="tie4"
                forceRight={true}
                textContent="120:1"
                textHeader="4"
                border="1px solid #0189DE"
                background={background}
            />
            {/* RED BANKER */}
            <CardDetailFooter
                symbol="tie5"
                forceRight={true}
                textContent="150:1"
                textHeader="5"
                border="1px solid #F30049"
                background={backgroundRed}
            />
            <CardDetailFooter
                symbol="tie6"
                forceRight={true}
                textContent="215:1"
                textHeader="6"
                border="1px solid #F30049"
                background={backgroundRed}
            />
            <CardDetailFooter
                symbol="tie7"
                forceRight={true}
                textContent="220:1"
                textHeader="7"
                border="1px solid #F30049"
                background={backgroundRed}
            />
            <CardDetailFooter
                symbol="tie8"
                forceRight={true}
                textContent="200:1"
                textHeader="8"
                border="1px solid #F30049"
                background={backgroundRed}
            />
            <CardDetailFooter
                symbol="tie9"
                forceRight={true}
                textContent="120:1"
                textHeader="9"
                border="1px solid #F30049"
                background={backgroundRed}
            />
        </>
    );
}
