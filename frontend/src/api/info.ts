
interface Description {
    key: number,
    text: string
}

interface BasicInfo {
    [key: string]: string
}

interface Info {
    basicInfo: BasicInfo,
    description: () => Description[],
    getBasicInfo: () => BasicInfo,
    getAllDescription: () => Description[],
    i18n: BasicInfo
    getAlli18nKey: () => BasicInfo,
}

const info: Info = {
    i18n: {
        courseName: 'Course name',
        courseCode: 'Course code',
        assignMentNo: 'Assignment Number',
        assignMentName: 'Name of the assignment',
        githubRepoUrl: 'Github URL'
    },
    basicInfo: {
        courseCode: 'TO00BS65-3001',
        courseName: 'Full Stack Development',
        assignMentNo: '4',
        assignMentName: 'REACT front-end',
        githubRepoUrl: 'https://github.com/zilahir/TO00BS65-3001_4' 
    },
    description: () => [
        { key: 1, text: `This application was written for the course ${info.basicInfo.courseCode}, at Laurea.`},
        { key: 2, text: 'The application\'s README file can be found on the GitHub repository' },
    ],
    getAlli18nKey: () => info.i18n,
    getBasicInfo: () => info.basicInfo,
    getAllDescription: () => info.description(),
}

export default info