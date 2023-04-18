import Link from 'next/link';
import DarkModeToggleButton from './dark-mode-toggle-button';

export default function Header(){
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                    <Link href="/">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <span className="ml-3 text-xl">👨‍💻 alidev.kr</span>
                        </a>
                    </Link>


                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

                        <a href="https://open.kakao.com/o/s1BHyWgc" className="mr-5 hover:text-gray-900">연락하기</a>

                    </nav>
                    {/* 다크모드 토글 버튼 작업해야함 */}
                    <DarkModeToggleButton/>
                </div>
            </header>
        </>
    );
}
