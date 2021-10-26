import Member from "./Member";

function Team() {
  const teamData = [
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633782037/team-members/sana_h5ihpq.jpg",
      "Sana Amin",
      "Founder and CEO",
      "I am proud to have become Living Solutions (Pvt) Ltd CEO & (Representative Director) & I sincerely look forward to your cooperation moving forward. We endeavor to connect digital technologies and human hopes and to implement a vision of a brighter future world.",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633761071/team-members/ali_tfbqkp.jpg",
      "Ali Aziz",
      "Managing Director",
      "I as Managing Director of Living Solutions(Pvt)Ltd work and focus to provide the best available services desired by the clients with the help of my professional team. Streamline the path and make the resources available in the best budgets. I aim to take the company to such levels where our clients feel comfortable and proud mentioning our name to others.",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633761073/team-members/shahid_phmpvk.jpg",
      "Brig(R) Shahid Saeed",
      "Chief Operating Officer",
      "I as Director of Living Solutions Private Limited can very proudly state that Living Solutions is the most innovative and versatile business entrepreneur in the corporate sector. We have a dynamic sales and marketing team headed by a very professional CEO, Madam Sana Amin.",
    ],
    [
      "./imgs/gibran.jpg",
      "Gibran Bin Tahir",
      "Business Development Manager",
      "",
    ],
    [
      "./imgs/safa.jpg",
      "Safa Khalid",
      "HR Executive",
      "I’m an HR Executive with 5 years of experience in the market, manage and assisting all HR-related tasks for my organization. Have experience of working with Senior Executives. Equipped with Strong organizational, analytical, and interpersonal skills.",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633778086/team-members/hamza_hcdoms.jpg",
      "Hamza Shafique",
      "Graphic Designer",
      "I’m a graphic designer who believes adobe software suite can be beautiful, fun and save me time!",
    ],
    ["/imgs/ahtisham.jpeg", "Ahtisham Sabir", "Project Contractor", ""],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633761370/team-members/nasir_kqozie.jpg",
      "Nasir Khalid",
      "Web Developer",
      "I am a Computer Science graduate from Monash University Malaysia, always looking for adventure and challenges. I love building responsive websites using React + TailwindCSS. ",
    ],

    [
      "./imgs/mursaleen.jpg",
      "Mursaleen Khalid",
      "Business Development Executive",
      "",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633761072/team-members/hiba_dctaqg.jpg",
      "Hiba Nasir",
      "Graphic Designer",
      "",
    ],
    [
      "./imgs/khalid.jpg",
      "Khalid Javed",
      "SEO/Content Specialist",
      "I’m an MBA finance & BBA (Hons) graduate in Management. Multitalented with 13 years of experience in the Finance and IT sector, working as a Certified Content writer from 2013.",
    ],
    ["./imgs/sameel.png", "Sameel Atif", "Videographer"],
    ["./imgs/ayan.png", "Ayan Atif", "Videographer", ""],
  ];
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="text-center pb-12">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-living-red">
          Our Team
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamData.map((member, index) => (
          <Member
            key={index}
            image={member[0]}
            name={member[1]}
            designation={member[2]}
            intro={member[3]}
          />
        ))}
      </div>
    </section>
  );
}

export default Team;
