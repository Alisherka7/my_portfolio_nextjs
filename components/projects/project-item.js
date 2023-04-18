import Image from "next/image";

export default function ProjectItem({data}){

    const title = data.properties.Name.title[0].plain_text
    // const github = data.properties.GitHub.url
    console.log(data.properties)
    // const youtube = data.properties.Youtube.url
    const description = data.properties.Description.rich_text[0].plain_text
    const imgSrc = data.cover.file?.url || data.cover.external.url
    const tags = data.properties.Tags.multi_select
    const start = data.properties.WorkPeriod.date.start
    const end = data.properties.WorkPeriod.date.end

    const calculatedPeriod = (start, end) => {
        const startDateStringArray = start.split('-');
        const endDateStringArray = end.split('-');

        var startDate = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2]);
        var endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2]);

        console.log(`startDate: ${startDate}`)
        console.log(`endDate: ${endDate}`)

        const diffInMs = Math.abs(endDate - startDate);
        const result = diffInMs / (1000 * 60 * 60 * 24);

        console.log(`기간 : ${result}`)
        return result;
    };

    return (
        <div class="justify-self-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-700 dark:bg-neutral-500">
            <a href="#">
            <Image
                className="rounded-t-xl"
                src={imgSrc}
                alt="cover image"
                width="50%"
                height="25%"
                layout="responsive"
                objectFit="cover"
                quality={100}
            />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <p className="my-1 ">
                    작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
                </p>
                <div className="flex items-start mt-2">
                    {tags.map((aTag) => (
                        <p className={`text-xs px-1 py-1 mr-2 rounded-md ${aTag.color} w-30`} key={aTag.id}>{aTag.name}</p>
                    ))}
                </div>
            </div>
        </div>
    
    );
}
