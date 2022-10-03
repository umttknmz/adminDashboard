import "./widgetBar.css";
import usersJob from "../data/oldUsers.json";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const total = [];
const fedJobData = [];
const fed = [];
const snrJobData = [];
const snr = [];
const bedJobData = [];
const bed = [];
const ceJobData = [];
const ce = [];
const fsdJobData = [];
const fsd = [];

usersJob.map(job => {
    //front-end developer
    fedJobData.push(job.FrontEndDeveloper);
    fedJobData.forEach(jobs => {
        fed.push(jobs.length);
    });
    //senior developer
    snrJobData.push(job.SeniorDeveloper);
    snrJobData.forEach(jobs => {
        snr.push(jobs.length);
    });
    //Back-End Developer
    bedJobData.push(job.BackEndDeveloper);
    bedJobData.forEach(jobs => {
        bed.push(jobs.length);
    });
    //Computer Engineer
    ceJobData.push(job.ComputerEngineer);
    ceJobData.forEach(jobs => {
        ce.push(jobs.length);
    });
    //Full Stack Developer
    fsdJobData.push(job.FullStackDeveloper);
    fsdJobData.forEach(jobs => {
        fsd.push(jobs.length);
    });
});

total.push(fed, snr, bed, ce, fsd);

/*Normal de altadaki functionu kullanarak JSON dosyasında meslek grupları sıralama yapılıp çagırılıyor ve en çoktan en aza gidiyor.
ancak chartJS grafiginde labels tarafına hata verildigi için her birisi ayrı bir arrayda çagırıldı ve burda ki fonksiyon kullanılamadı.*/

// function listArray(arr) {
// dizideki tekrar eden elemanları sayı adedine toplayıp yeni obj olusturuyoruz
//     const itemCount = [];
//     arr.forEach(function (x) { itemCount[x] = (itemCount[x] || 0) + 1; });
//     // olusturdugumuz objeyi ters siralamak icin diziye donusturuyoruz.
//     const countsSortable = [];
//     for (const i in itemCount) {
//         countsSortable.push([itemCount[i]])
//     }
//     return countsSortable;
// }
// function listArrayJob(arr) {
// dizideki tekrar eden elemanları sayı adedine toplayıp yeni obj olusturuyoruz
//     const itemCount = [];
//     arr.forEach(function (x) { itemCount[x] = (itemCount[x] || 0) + 1; });
// olusturdugumuz objeyi ters siralamak icin diziye donusturuyoruz.
//     const countsSortable = [];
//     for (const i in itemCount) {
//         countsSortable.push([i],i)
//     }
//     return countsSortable;
// }

// const lineJob = [];
// lineJob.push(listArrayJob(jobData).join());

// console.log(listArray(jobData).join());
// console.log(lineJob);

const data = {
    labels: ["Front-End Developer", "Back-End Developer", "Senior Developer", "Bilgisayar Mühendisi", "Full Stack Developer"],
    datasets: [
        {
            label: "Meslekler",
            data: total,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};


export default function WidgetBar() {
    return (
        <div className="widgetBar">
            <h3 className="barTitle">Üye Meslekleri</h3>
            <Doughnut data={data} />
        </div>
    )
}
