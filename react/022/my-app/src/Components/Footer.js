import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Footer = () => {
    return <div>
        <footer class="cont-footer">
                <img class="img-footer" src="img/weniv.png" alt="" />
                <p class="txt-footer">
                    &#8251; 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사
                    WeNiv에 있습니다.
                </p>
                <p>
                    수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수
                    있습니다.
                </p>
            </footer>
    </div>;
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
// #endregion

export default Footer;