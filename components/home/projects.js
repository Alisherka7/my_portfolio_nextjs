import ProjectItem from "../projects/project-item";


export default function MyProjects({projects}) {

    console.log(projects);
    return(
        <>
            <div className="container xl:max-w-6xl mx-auto px-4 py-10">
                <div className="mx-auto max-w-2xl py-10 lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">🔥 개인 및 팀 프로젝트</p>
                    <hr></hr>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                    {projects.results.map((aProject) => (
                        <ProjectItem key={aProject.id} data={aProject}/>
                    ))}
                </div>
            </div>
        </>
    );
};
