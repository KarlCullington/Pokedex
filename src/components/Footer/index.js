import React from 'react';
import { FcLike } from 'react-icons/fc';
import { CgPokemon } from 'react-icons/cg';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights,
    SocialLogo,
    SocialIcons,
    SocialIconLink,
} from './FootElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Pokémon</SocialLogo>
                        <WebsiteRights>
                            Pokémon <CgPokemon /> {new Date().getFullYear()}{' '}
                            Made with <FcLike /> by Karl Cullington.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink
                                href='/'
                                target='_blank'
                                aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink
                                href='//www.facebook.com'
                                target='_blank'
                                aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink
                                href='/'
                                target='_blank'
                                aria-label='Youtube'>
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink
                                href='/'
                                target='_blank'
                                aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink
                                href='/'
                                target='_blank'
                                aria-label='Github'>
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink
                                href='/'
                                target='_blank'
                                aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
