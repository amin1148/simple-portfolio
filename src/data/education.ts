interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "Bsc In Textile Engineering",
        startDate: "2021-06-01",
        endDate: "2025-06-01",
        school: "Daffodil International University",
        location: "Bangladesh",
        description: "Apparel Manufacturing & Technology",
        currentUni: false,
    },
    {
        title: "Higher Secondary Certificate",
        startDate: "2018-01-01",
        endDate: "2020-01-30",
        school: "Mohanganj Govt. College",
        location: "Netrakona,Mymensingh",
        description: "Science Group",
        currentUni: false,
    },
    {
        title: "Secondary School Certificate",
        startDate: "2015-01-01",
        endDate: "2017-01-01",
        school: "Mohanganj Pilot Govt. High School",
        location: "Netrakona,Mymensingh",
        description: "Science Group",
        currentUni: false,
    },
];

export default education; 
