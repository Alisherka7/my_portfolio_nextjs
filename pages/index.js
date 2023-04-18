import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout';
import Animation from '../components/home/animation';
import AboutMe from '../components/home/hero';
import Career from '../components/home/career';
import Technology from '../components/home/technology';
import MyProjects from '../components/home/projects';
import { TOKEN, DATABASE_ID } from "../config";
import Education from '../components/home/education';

export default function Home({projects}) {
  return (
    <Layout>
        <Head>
            <title>알레셰르입니다</title>
            <meta name="description" content= "알레셰르입니다!" />
            <link rel="icon" href="/icon.ico" />
        </Head>
            <div className="container mx-auto flex py-24 md:flex-row flex-col items-center padding-setup">
                <AboutMe/>
            </div>
            <div >
                <Career/>
                <Education/>
                <Technology/>
                <MyProjects projects={projects}/>
            </div>
    </Layout>
  );
}

// 빌드 타임에 호출
// export async function getStaticProps() {

// 각 요청 때마다 호출
export async function getServerSideProps() {

  const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Notion-Version': '2022-02-22',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`
      },
      body: JSON.stringify({
          sorts: [
              {
                  "property": "Name",
                  "direction": "ascending"
              }
          ],
          page_size: 100
      })
    };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

  const projects = await res.json()

  const projectNames = projects.results.map((aProject) =>(
      aProject.properties.Name.title[0].plain_text
  ))

  console.log(`projectNames : ${projectNames}`);

  return {
    props: {projects}, // will be passed to the page component as props
    // getStaticProps() 메소드를 사용한다면 revalidate 로 데이터 변경시 갱신가능!
    // revalidate: 1 // 데이터 변경이 있으면 갱신 1초 마다
  }
}
