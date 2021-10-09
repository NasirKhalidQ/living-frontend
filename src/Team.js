import Member from "./Member";

function Team() {
  const teamData = [
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633761073/team-members/sana_vfhpqz.jpg",
      "Sana Amin",
      "Founder and CEO",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633761071/team-members/ali_tfbqkp.jpg",
      "Ali Aziz",
      "Managing Director",
    ],

    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633761073/team-members/shahid_phmpvk.jpg",
      "Bgr Shahid Saeed",
      "Chief Operating Officer",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633761071/team-members/gibran_gduyfg.jpg",
      "Gibran Bin Tahir",
      "Business Development Manager",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633761073/team-members/safa_bsifxl.jpg",
      "Safa Khalid",
      "HR Executive",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633761370/team-members/nasir_kqozie.jpg",
      "Nasir Khalid",
      "Web Developer",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633761072/team-members/hamza_ucfphe.jpg",
      "Hamza Shafique",
      "Graphic Designer",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633761072/team-members/mursaleen_j7heg4.jpg",
      "Mursaleen Khalid",
      "Business Development Executive",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633761072/team-members/hiba_dctaqg.jpg",
      "Hiba Nasir",
      "Graphic Designer",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633761072/team-members/khalid_zwuwie.jpg",
      "Khaled Javed",
      "SEO/Content Specialist",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633761073/team-members/sameel_sl56f7.png",
      "Sameel Atif",
      "Videographer",
    ],
    [
      "https://res.cloudinary.com/living-solutions/image/upload/v1633761072/team-members/ayan_h9whev.png",
      "Ayan Atif",
      "Videographer",
    ],
  ];
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="text-center pb-12">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-200">
          Check our awesome team members
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamData.map((member, index) => (
          <Member
            key={index}
            image={member[0]}
            name={member[1]}
            designation={member[2]}
          />
        ))}
      </div>
    </section>
  );
}

export default Team;
