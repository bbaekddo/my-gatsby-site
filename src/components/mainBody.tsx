import * as React from 'react';

const MAINBODY = (props: any) => {
    return (
        <main>
            <section id='title-sub1-wrap'>
                <h2 style={{fontWeight: 'normal'}}>가인지캠퍼스</h2>
                <h2 style={{fontWeight: 'normal'}}><strong>개발</strong>에 대한 <strong>모든 것</strong></h2>
            </section>

            <br />

            <section id='title-sub2-wrap'>
                <p>안녕하세요. 가인지캠퍼스 고객경험센터입니다 :)</p>
                <br />
                <p>가인지 캠퍼스라는 서비스를 만들어가면서 얻은 우리의 지식들이 세상으로 흘러가도록</p>
                <p>매주 새로운 소식들로 채워가려고 합니다.</p>
                <p>더 풍성해질 가인지 Tech를 기대해주세요!</p>
            </section>

            <section id='see-more-button' style={{textAlign: 'center'}}>
                <button type='button' className='button see-more-button' >icon</button>
            </section>

            <section id='content-wrap'>
                <div className='left-content' style={{float: 'left', width: '60%'}}>
                    <ul>
                        <li>
                            <h3>우리는 IT 회사가 될 수 있을까?</h3>
                            <p>기업 컨설팅 회사가 개발자 IT회사로 가기까지의 우여곡절!</p>
                            <div>
                                <img src='' alt='profileImageAdam' />애덤 | PM
                            </div>
                        </li>
                        <li>
                            <h3>선언적 코드 작성하기</h3>
                            <p>선언적 코드를 고민하다가, 가인지캠퍼스 프론트엔드 개발자는 어떻게 생각할까요?</p>
                            <div>
                                <img src='' alt='profileImageSophie' />소피 | FE
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='right-content' style={{float: 'left', width: '40%'}}>
                    <ul>
                        <li>
                            <img src='' alt='profileImageAdam' />
                                <p>애덤</p>
                                <p>Product Manager</p>
                                <p>잘! 하고 싶은 모든 사람들이 그 선한 열정을 이룰 수 있게 돕고 싶습니다.</p>
                        </li>
                        <li>
                            <img src='' alt='profileImageSophie' />
                                <p>소피</p>
                                <p>Frontend Developer</p>
                                <p>고객이 우리 프로덕트에서 재밌는 경험을 했으면 좋겠습니다.</p>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
}

export default MAINBODY
