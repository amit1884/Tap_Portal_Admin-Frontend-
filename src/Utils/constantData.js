

export const branches=[
    {
        id:1,
        branch:'Civil Engineering',
        short_form:'CE'
    },
    {
        id:2,
        branch:'Computer Science and Engineering',
        short_form:'CSE'
    },
    {
        id:3,
        branch:'Electronics and Communication Engineering',
        short_form:'ECE'
    },
    {
        id:4,
        branch:'Electrical Engineering',
        short_form:'EE'
    },
    {
        id:5,
        branch:'Mechanical Engineering',
        short_form:'ME'
    },
    {
        id:6,
        branch:'Metallurgy and Materials Engineering',
        short_form:'META'
    },
    {
        id:7,
        branch:'Production and Industrial Engineering',
        short_form:'PI'
    },
    {
        id:8,
        branch:'M.Tech',
        short_form:'MTECH'
    },
   
]

export const batch=[{
    year:new Date().getFullYear()+3,
    alias:'new'
},
{
    year:new Date().getFullYear()+2,
    alias:'pre_final'
},
{
    year:new Date().getFullYear()+1,
    alias:'final'
}
]


export const testJobs=[
    {
        id:1,
        company_name:'Amazon',
        position:'Software Development Engineer',
        eligible_branch:['CSE','ECE','EE'],
        batch:['2024'],
        '10th':'70',
        '12th':'70',
        'graduation':'8',
        'ppt':'21-08-2021',
        'test':'22-08-2021',
        'interview':['23-08-2021','24-08-2021'],
        'jd':'Role for SDE 1 (6 months intern+ FTE)',
        'jd_file':'',
        'deadline':['19-08-2021','23:00:00']
    },
    {
        id:2,
        company_name:'Tekion',
        position:'Associate Software Engineer',
        eligible_branch:['CSE'],
        batch:['2022'],
        '10th':'70',
        '12th':'70',
        'graduation':'8',
        'ppt':'25-08-2021',
        'test':'26-08-2021',
        'interview':['27-08-2021','27-08-2021'],
        'jd':'Role for SDE 1 (6 months intern+ FTE)',
        'jd_file':'',
        'deadline':['22-08-2021','23:00:00']
    }
]