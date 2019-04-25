
const awards = JSON.parse(`[{
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=144",
	"Name": "ARIT Fellowships in the Humanities and Social Sciences in Turkey",
	"Discipline": "Arts and Humanities",
	"Demographic": "All, International students",
	"Degree": "PhD, Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=303",
	"Name": "2018 Youth Activist Fellowships Guidelines and Application",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=60",
	"Name": "AAAS Mass Media Science & Engineering Fellows Program",
	"Discipline": "Engineering, Physical Sciences",
	"Demographic": "All, International students",
	"Degree": "Senior, Masters, PhD, Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=294",
	"Name": "AAAS Science & Technology Policy Fellowships (STPF)",
	"Discipline": "Engineering, Life Sciences/ Health Sciences, Physical Sciences, Social Sciences",
	"Demographic": "",
	"Degree": "Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=47",
	"Name": "AAUW American Fellowship",
	"Discipline": "Not Specified",
	"Demographic": "Women",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=152",
	"Name": "AAUW International Fellowship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "International students, Women",
	"Degree": "Masters, PhD, Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=334",
	"Name": "Abe Fellowship",
	"Discipline": "Social Sciences",
	"Demographic": "All, International students",
	"Degree": "Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=102",
	"Name": "AERA Dissertation Grants Program",
	"Discipline": "Social Sciences",
	"Demographic": "All, International students",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=106",
	"Name": "AERA Fellowship Program on the Study of Deeper Learning",
	"Discipline": "Social Sciences, Interdisciplinary",
	"Demographic": "",
	"Degree": "Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=105",
	"Name": "AERA Institute on Statistical Analysis for Education Policy",
	"Discipline": "Social Sciences",
	"Demographic": "All, International students",
	"Degree": "Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=103",
	"Name": "AERA Minority Dissertation Fellowship Program in Education Research",
	"Discipline": "Social Sciences",
	"Demographic": "Minorities",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=104",
	"Name": "AERA Undergraduate Student Education Research Training Workshop",
	"Discipline": "Arts and Humanities, Social Sciences, Interdisciplinary",
	"Demographic": "",
	"Degree": "Sophomore, Junior, Senior"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=107",
	"Name": "AERA-Measures of Effective Teaching (MET) Dissertation Fellowship Program",
	"Discipline": "Social Sciences",
	"Demographic": "First generation college students , Minorities, Women",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=167",
	"Name": "AHRQ Grants for Health Services Research Dissertation Program (R36)",
	"Discipline": "Life Sciences/ Health Sciences",
	"Demographic": "",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=101",
	"Name": "Albert Schweitzer Fellowship, The",
	"Discipline": "Life Sciences/ Health Sciences",
	"Demographic": "",
	"Degree": "Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=246",
	"Name": "Alfa Fellowship Program",
	"Discipline": "Arts and Humanities, Social Sciences, Interdisciplinary",
	"Demographic": "",
	"Degree": "Masters, PhD, Post Doctorate, Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=97",
	"Name": "American Heart Association Predoctoral Fellowship",
	"Discipline": "Life Sciences/ Health Sciences",
	"Demographic": "All, International students",
	"Degree": "PhD, Professional Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=348",
	"Name": "American Philosophical Society Fellowship at the Institute for Advanced Studies in the Humanities Fellowship for Research in Edinburgh",
	"Discipline": "Arts and Humanities, Social Sciences",
	"Demographic": "",
	"Degree": "Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=55",
	"Name": "American Public Transportation Foundation Scholarship",
	"Discipline": "Social Sciences",
	"Demographic": "All, International students",
	"Degree": "Sophomore, Junior, Senior, Masters"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=263",
	"Name": "American Society for Theatre Research Fellowships",
	"Discipline": "Arts and Humanities",
	"Demographic": "",
	"Degree": "PhD, Post Doctorate, Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=160",
	"Name": "American-Scandinavian Foundation Fellowships & Grants",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Masters, PhD, Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=208",
	"Name": "AmeriCorps Ally Program",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Bachelors degree (not currently enrolled), Masters, PhD, Professional Doctorate, Post Doctorate, Undergraduate, Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=18",
	"Name": "Amgen Scholars Program at Caltech",
	"Discipline": "Engineering, Life Sciences/ Health Sciences, Physical Sciences",
	"Demographic": "",
	"Degree": "Sophomore, Junior, Senior"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=146",
	"Name": "AMS Graduate Fellowships",
	"Discipline": "Physical Sciences",
	"Demographic": "",
	"Degree": "Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=64",
	"Name": "APA Predoctoral Mental Health and Substance Abuse Services (MHSAS) Fellowship",
	"Discipline": "Social Sciences",
	"Demographic": "Minorities",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=145",
	"Name": "ARIT Summer Fellowships for Intensive Advanced Turkish Language Study at Bogazici University, Istanbul",
	"Discipline": "",
	"Demographic": "",
	"Degree": "Junior, Senior, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=181",
	"Name": "Armenian Women Scholarship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "Women",
	"Degree": "Masters, PhD, Professional Doctorate, Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=315",
	"Name": "ASA Minority Fellowship Program",
	"Discipline": "Open to All Disciplines",
	"Demographic": "Minorities",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=162",
	"Name": "Astronaut Scholarship",
	"Discipline": "Engineering, Physical Sciences",
	"Demographic": "USC students",
	"Degree": "Sophomore, Junior"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=304",
	"Name": "Atlanta Car Accident Lawyers 2018 Community Service Scholarship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Freshman, Sophomore, Junior, Senior, Masters, PhD, Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=119",
	"Name": "Award for Research/Study in Scandinavia",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "PhD, Professional Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=340",
	"Name": "Beckman Center History of Science Dissertation Fellowship",
	"Discipline": "Arts and Humanities, Life Sciences/ Health Sciences, Physical Sciences, Social Sciences",
	"Demographic": "All, International students",
	"Degree": "PhD, Professional Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=339",
	"Name": "Beckman Center History of Science Postdoctoral Fellowship",
	"Discipline": "Arts and Humanities, Life Sciences/ Health Sciences, Physical Sciences, Social Sciences",
	"Demographic": "All, International students",
	"Degree": "Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=163",
	"Name": "Beinecke Scholarship Program",
	"Discipline": "Arts and Humanities, Social Sciences",
	"Demographic": "Demonstrates Financial Need",
	"Degree": "Junior"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=17",
	"Name": "Benjamin A. Gilman International Scholarship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "Demonstrates Financial Need",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=184",
	"Name": "Berger and Green Heart Disease Scholarship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Masters, PhD, Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=108",
	"Name": "Biodesign Innovation Fellowship",
	"Discipline": "Life Sciences/ Health Sciences",
	"Demographic": "All, International students",
	"Degree": "Masters, PhD, Professional Doctorate, Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=262",
	"Name": "BMI Foundation Scholarships",
	"Discipline": "Arts and Humanities",
	"Demographic": "",
	"Degree": ""
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=164",
	"Name": "Boren Awards for International Study",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Freshman, Sophomore, Junior, Senior, Bachelors degree (not currently enrolled)"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=250",
	"Name": "Boren Graduate Fellowships",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Masters, PhD, Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=114",
	"Name": "Bullitt Environmental Fellowship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "Minorities",
	"Degree": "Masters"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=183",
	"Name": "California Latino Legislative Caucus Foundation Scholarship Program",
	"Discipline": "Open to All Disciplines",
	"Demographic": "Minorities",
	"Degree": "Freshman, Sophomore, Junior, Senior"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=157",
	"Name": "Capital Fellows Program",
	"Discipline": "Open to All Disciplines",
	"Demographic": "USC students",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Masters, PhD, Professional Doctorate, Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=141",
	"Name": "CCST Science and Technology Policy Fellowship",
	"Discipline": "Engineering, Life Sciences/ Health Sciences, Physical Sciences",
	"Demographic": "",
	"Degree": "Masters, PhD, Professional Doctorate, Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=336",
	"Name": "CDC Evaluation Fellowship",
	"Discipline": "Life Sciences/ Health Sciences, Social Sciences",
	"Demographic": "All, International students",
	"Degree": "Masters, Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=151",
	"Name": "CES Dissertation Fellowship",
	"Discipline": "Social Sciences",
	"Demographic": "All, International students",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=314",
	"Name": "Chancellor's International Research Scholarships",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Bachelors degree (not currently enrolled), Masters, Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=249",
	"Name": "Charles B. Rangel International Affairs Graduate Fellowship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "Demonstrates Financial Need",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=248",
	"Name": "Charles B. Rangel International Affairs Summer Enrichment Program",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Sophomore, Junior, Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=46",
	"Name": "Charlotte W. Newcombe Doctoral Dissertation Fellowship",
	"Discipline": "Arts and Humanities, Social Sciences",
	"Demographic": "All, International students",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=300",
	"Name": "Chateaubriand Fellowship",
	"Discipline": "Arts and Humanities, Engineering, Life Sciences/ Health Sciences, Physical Sciences, Social Sciences",
	"Demographic": "",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=329",
	"Name": "Chisholm Chisholm & Kilpatrick's Child of an American Veteran Scholarship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=222",
	"Name": "Chisholm Chisholm & Kilpatrick's Child of Disabled Veteran Scholarship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Masters, PhD, Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=328",
	"Name": "Chishom Chisholm & Kilpatrick's Law School Scholarship for Veterans",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Junior, Senior, Bachelors degree (not currently enrolled)"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=333",
	"Name": "Christine Mirzayan Science & Technology Policy Graduate Fellowship",
	"Discipline": "Engineering, Life Sciences/ Health Sciences, Physical Sciences, Social Sciences, Interdisciplinary",
	"Demographic": "",
	"Degree": "Masters, PhD, Professional Doctorate, Post Doctorate, Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=165",
	"Name": "Churchill Scholarship",
	"Discipline": "Engineering, Physical Sciences",
	"Demographic": "",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=20",
	"Name": "City Year",
	"Discipline": "Open to All Disciplines",
	"Demographic": "All, First generation college students , Minorities, USC students",
	"Degree": "Freshman, Sophomore, Junior, Senior, Bachelors degree (not currently enrolled)"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=293",
	"Name": "Climate Scholarship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Freshman, Sophomore, Junior, Senior, Masters, PhD, Post Doctorate, Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=41",
	"Name": "Congress-Bundestag Youth Exchange for Young Professionals",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=319",
	"Name": "Consular Fellows Program",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Bachelors degree (not currently enrolled), Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=187",
	"Name": "Coro Fellows Program",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Masters, PhD, Professional Doctorate, Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=166",
	"Name": "Critical Language Scholars (CLS) Program",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=155",
	"Name": "CSMC Movement Disorders Fellowship",
	"Discipline": "Life Sciences/ Health Sciences",
	"Demographic": "All",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=287",
	"Name": "Cultural Vistas Fellowship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "First generation college students , Demonstrates Financial Need, Minorities",
	"Degree": "Sophomore, Junior"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=43",
	"Name": "Cultural Vistas Summer Internship Program in Germany",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Sophomore, Junior, Senior"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=358",
	"Name": "Cybersecurity Talent Initiative",
	"Discipline": "Engineering",
	"Demographic": "Demonstrates Financial Need",
	"Degree": "Masters, Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=138",
	"Name": "DAAD Research Grants",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=99",
	"Name": "DAAD/AICGS Research Fellowship",
	"Discipline": "",
	"Demographic": "",
	"Degree": "PhD, Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=335",
	"Name": "Data Science Fellowship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Masters, PhD, Post Doctorate, Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=27",
	"Name": "DOD National Defense Science and Engineering Graduate Fellowship",
	"Discipline": "Engineering, Life Sciences/ Health Sciences, Physical Sciences",
	"Demographic": "",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=29",
	"Name": "DOD Science, Mathematics And Research for Transformation (SMART)",
	"Discipline": "Engineering, Life Sciences/ Health Sciences, Physical Sciences",
	"Demographic": "",
	"Degree": "Freshman, Sophomore, Junior, Senior, Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=239",
	"Name": "DOE Clean Cities University Workforce Development Program",
	"Discipline": "",
	"Demographic": "",
	"Degree": ""
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=30",
	"Name": "DOE Computational Science Graduate Fellowship (DOE CSGF)",
	"Discipline": "Engineering, Life Sciences/ Health Sciences, Physical Sciences",
	"Demographic": "",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=235",
	"Name": "DOE General Counsel Law Student Intern Program",
	"Discipline": "",
	"Demographic": "",
	"Degree": "Masters"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=236",
	"Name": "DOE General Counsel Undergraduate Intern Program",
	"Discipline": "Not Specified",
	"Demographic": "",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=139",
	"Name": "DOE Office of Science Graduate Student Research (SCGSR) Program",
	"Discipline": "Life Sciences/ Health Sciences, Physical Sciences",
	"Demographic": "",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=225",
	"Name": "DOE Scholars Program",
	"Discipline": "Engineering, Physical Sciences",
	"Demographic": "",
	"Degree": "Bachelors degree (not currently enrolled), Masters, PhD, Post Doctorate, Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=237",
	"Name": "DOE Science Undergraduate Laboratory Internships",
	"Discipline": "Not Specified",
	"Demographic": "",
	"Degree": "Sophomore, Junior, Senior"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=234",
	"Name": "DOE Tribal Internship Program",
	"Discipline": "Open to All Disciplines",
	"Demographic": "Minorities",
	"Degree": "Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=256",
	"Name": "Donald M. Payne International Development Fellowship Program",
	"Discipline": "",
	"Demographic": "Demonstrates Financial Need, Minorities",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=134",
	"Name": "Dr. Rodolfo Montes Scholarship",
	"Discipline": "Arts and Humanities, Life Sciences/ Health Sciences, Social Sciences",
	"Demographic": "First generation college students , Minorities, USC students",
	"Degree": "Masters"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=337",
	"Name": "Earth Institute Postdoctoral Research Program",
	"Discipline": "Life Sciences/ Health Sciences, Interdisciplinary",
	"Demographic": "",
	"Degree": "Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=116",
	"Name": "EDF Climate Corps Fellowship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Masters"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=136",
	"Name": "EDU United States to Australian Fellowship",
	"Discipline": "",
	"Demographic": "",
	"Degree": ""
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=44",
	"Name": "Educators for Fair Consideration (E4FC)",
	"Discipline": "Open to All Disciplines",
	"Demographic": "First generation college students , Demonstrates Financial Need, Minorities, Women",
	"Degree": "Freshman, Sophomore, Junior, Senior, Bachelors degree (not currently enrolled), Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=238",
	"Name": "EERE Robotics Internship Program (DOE)",
	"Discipline": "",
	"Demographic": "",
	"Degree": "Bachelors degree (not currently enrolled), Masters, PhD, Post Doctorate, Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=230",
	"Name": "EERE Student Volunteer Internship Program",
	"Discipline": "Not Specified",
	"Demographic": "",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=307",
	"Name": "Eileen Sweeney Graduate Internship in Disability Policy",
	"Discipline": "Social Sciences, Open to All Disciplines",
	"Demographic": "",
	"Degree": "Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=153",
	"Name": "Elizabeth Munsterberg Koppitz Child Psychology Graduate Student Fellowship",
	"Discipline": "Social Sciences",
	"Demographic": "All, International students",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=264",
	"Name": "Ella Lyman Cabot Grants, The",
	"Discipline": "Arts and Humanities",
	"Demographic": "",
	"Degree": ""
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=189",
	"Name": "Emigre Memorial German Internship Program - German State Parliaments (EMGIP)",
	"Discipline": "",
	"Demographic": "",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=68",
	"Name": "Explorers Club Exploration Fund Grant, The",
	"Discipline": "Engineering, Life Sciences/ Health Sciences, Physical Sciences, Social Sciences, Interdisciplinary",
	"Demographic": "All",
	"Degree": "Masters, PhD, Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=313",
	"Name": "Ezera Research Fellowship for African Students",
	"Discipline": "Arts and Humanities, Social Sciences",
	"Demographic": "International students",
	"Degree": "Senior, Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=150",
	"Name": "Feuchtwanger Conference Travel Award",
	"Discipline": "",
	"Demographic": "All, International students, USC students",
	"Degree": "Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=324",
	"Name": "Financial Leadership Fellowship",
	"Discipline": "",
	"Demographic": "",
	"Degree": ""
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=84",
	"Name": "Ford Foundation Predoctoral, Dissertation & Doctoral Awards",
	"Discipline": "",
	"Demographic": "Minorities",
	"Degree": "Senior, Masters, PhD, Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=190",
	"Name": "Foreign Affairs Information Technology Fellowship",
	"Discipline": "",
	"Demographic": "Demonstrates Financial Need, Minorities, Women",
	"Degree": "Sophomore, Masters"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=169",
	"Name": "Fulbright U.S. Student Program",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Junior, Senior, Bachelors degree (not currently enrolled), Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=191",
	"Name": "Fulbright US-UK Summer Institute Program",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Freshman, Sophomore"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=170",
	"Name": "Gates Cambridge Scholarship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Junior, Senior, Bachelors degree (not currently enrolled), Masters"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=94",
	"Name": "GEM Fellowship Program, The",
	"Discipline": "Engineering, Physical Sciences",
	"Demographic": "Minorities",
	"Degree": "Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=331",
	"Name": "Georgetown University's Initiative for U.S.-China Dialogue on Global Issues",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Freshman, Sophomore, Junior, Senior, Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=252",
	"Name": "German Chancellor Fellowship for Tomorrow's Leaders, The",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=171",
	"Name": "Goldwater Scholarship",
	"Discipline": "Engineering, Physical Sciences",
	"Demographic": "",
	"Degree": "Sophomore, Junior"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=98",
	"Name": "Google Student Fellowship",
	"Discipline": "Engineering",
	"Demographic": "All",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=175",
	"Name": "GoStartABlog's Young Writers Scholarship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "All",
	"Degree": "Freshman, Sophomore, Junior"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=147",
	"Name": "GRAMMY Foundation Grants",
	"Discipline": "",
	"Demographic": "All",
	"Degree": "Masters, PhD, Professional Doctorate, Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=299",
	"Name": "Greenberg Research Fellowship, Katz Research Fellowship in Genocide Studies and Breslauer, Rutman, and Anderson Research Fellowship",
	"Discipline": "Arts and Humanities, Social Sciences",
	"Demographic": "All",
	"Degree": "PhD, Professional Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=302",
	"Name": "Harold Gulliksen Psychometric Research Fellowship",
	"Discipline": "Social Sciences",
	"Demographic": "",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=70",
	"Name": "Harry Frank Guggenheim Dissertation Fellowships",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=178",
	"Name": "Harry S. Truman Scholarship, The",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Junior"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=51",
	"Name": "Harvard University PON Graduate Research Fellowship",
	"Discipline": "Social Sciences",
	"Demographic": "All, International students",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=192",
	"Name": "Harvard-Amgen Scholars Program",
	"Discipline": "Not Specified",
	"Demographic": "Minorities, Women",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=48",
	"Name": "Haynes Lindley Doctoral Dissertation Fellowships",
	"Discipline": "Social Sciences",
	"Demographic": "All, International students",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=126",
	"Name": "Henry Luce Foundation/ACLS Post-Doctoral Fellowship in China Studies",
	"Discipline": "Arts and Humanities, Social Sciences",
	"Demographic": "",
	"Degree": "Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=125",
	"Name": "Henry Luce Foundation/ACLS Predissertation-Summer Travel Grant in China Studies",
	"Discipline": "Arts and Humanities, Social Sciences",
	"Demographic": "",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=182",
	"Name": "Herbert Scoville Jr. Peace Fellowship, The",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Senior, Bachelors degree (not currently enrolled)"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=199",
	"Name": "Hertog Foundation Summer Fellowships Programs",
	"Discipline": "",
	"Demographic": "",
	"Degree": "Undergraduate, Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=81",
	"Name": "Hertz Foundation Fellowship",
	"Discipline": "Engineering, Physical Sciences",
	"Demographic": "All",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=159",
	"Name": "HUHS Administrative Health Care Fellowship",
	"Discipline": "Life Sciences/ Health Sciences",
	"Demographic": "",
	"Degree": "Masters, PhD, Professional Doctorate, Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=200",
	"Name": "Humanity in Action Fellowship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Sophomore, Junior, Senior, Bachelors degree (not currently enrolled), Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=332",
	"Name": "IAF Grassroots Development PhD Fellowship",
	"Discipline": "Physical Sciences, Social Sciences",
	"Demographic": "All",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=110",
	"Name": "Jacobs Science Writer Fellowship",
	"Discipline": "",
	"Demographic": "All",
	"Degree": "Masters, Professional Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=186",
	"Name": "James C. Gaither Junior Fellows Program",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=254",
	"Name": "James Madison Fellowships",
	"Discipline": "",
	"Demographic": "",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=241",
	"Name": "John F. and Anna Lee Stacey Scholarship Fund, The",
	"Discipline": "Arts and Humanities",
	"Demographic": "",
	"Degree": ""
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=188",
	"Name": "John Foy & Associates Strong Arm Leukemia Scholarship, The",
	"Discipline": "Open to All Disciplines, Open to All Disciplines",
	"Demographic": "All",
	"Degree": "Freshman, Freshman, Sophomore, Junior, Junior, Senior, Senior, Masters, PhD, Professional Doctorate, Post Doctorate, Undergraduate, Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=309",
	"Name": "John Heinz Dissertation Award",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=72",
	"Name": "John Hope Franklin Dissertation Fellowship",
	"Discipline": "Arts and Humanities, Social Sciences, Interdisciplinary",
	"Demographic": "Minorities",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=49",
	"Name": "Josephine De Karman Fellowship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "All, International students",
	"Degree": "Senior, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=251",
	"Name": "Kanders Churchill Scholarship",
	"Discipline": "",
	"Demographic": "",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=240",
	"Name": "Kate Neal Kinley Memorial Fellowship",
	"Discipline": "Arts and Humanities",
	"Demographic": "",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=217",
	"Name": "Kent's Summer Schools",
	"Discipline": "",
	"Demographic": "",
	"Degree": ""
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=212",
	"Name": "Kip Tiernan Social Justice Fellowship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "Women",
	"Degree": ""
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=338",
	"Name": "Kluge Fellowships",
	"Discipline": "Social Sciences, Interdisciplinary",
	"Demographic": "All, International students",
	"Degree": "Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=220",
	"Name": "Knight-Hennessy Scholars",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Senior, Bachelors degree (not currently enrolled)"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=290",
	"Name": "Lab-Embedded Entrepreneurship Program",
	"Discipline": "Engineering, Physical Sciences",
	"Demographic": "",
	"Degree": "PhD, Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=341",
	"Name": "Lead For America Fellowship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Senior, Masters"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=115",
	"Name": "Leland International Hunger Fellows Program",
	"Discipline": "",
	"Demographic": "",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Masters, Professional Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=69",
	"Name": "Lewis and Clark Fund for Exploration and Field Research, The",
	"Discipline": "Engineering, Life Sciences/ Health Sciences, Physical Sciences, Social Sciences, Interdisciplinary",
	"Demographic": "International students",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=161",
	"Name": "Louise Kerckhoff Prize",
	"Discipline": "Arts and Humanities",
	"Demographic": "USC students",
	"Degree": "Freshman, Sophomore, Junior, Senior, Masters"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=172",
	"Name": "Luce Scholarship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Junior, Senior, Bachelors degree (not currently enrolled)"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=123",
	"Name": "Luce/ACLS Dissertation Fellowships in American Art",
	"Discipline": "Arts and Humanities, Social Sciences",
	"Demographic": "",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=74",
	"Name": "Mariam K. Chamberlain Dissertation Award",
	"Discipline": "Open to All Disciplines",
	"Demographic": "All, International students, Women",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=173",
	"Name": "Marshall Scholarship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Junior, Senior, Bachelors degree (not currently enrolled)"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=268",
	"Name": "Maymester",
	"Discipline": "",
	"Demographic": "USC students",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=54",
	"Name": "Mellon CLIR Fellowships for Dissertation Research in Original Sources",
	"Discipline": "Arts and Humanities, Social Sciences, Interdisciplinary",
	"Demographic": "All, First generation college students , International students, Minorities, Women",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=61",
	"Name": "Mellon/ACLS Dissertation Completion Fellowship",
	"Discipline": "Arts and Humanities, Social Sciences",
	"Demographic": "",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=342",
	"Name": "Mellon/ACLS Public Fellowship for Recent PhDs",
	"Discipline": "Arts and Humanities, Social Sciences",
	"Demographic": "",
	"Degree": "Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=185",
	"Name": "Michel David-Weill Scholarship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Senior"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=232",
	"Name": "Mickey Leland Energy Fellowship Program",
	"Discipline": "",
	"Demographic": "",
	"Degree": "Sophomore, Junior, Senior, Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=85",
	"Name": "Microsoft Research Ph. D. Fellowship Program",
	"Discipline": "Engineering",
	"Demographic": "All",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=228",
	"Name": "Minority Educational Institution Student Partnership Program",
	"Discipline": "Engineering, Physical Sciences, Social Sciences",
	"Demographic": "Minorities",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=174",
	"Name": "Mitchell Scholarship Program, The",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=253",
	"Name": "MMUF Dissertation Support Program",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=201",
	"Name": "Mount Vernon Leadership Fellows",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Sophomore"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=120",
	"Name": "National Academy of Education/Spencer Dissertation Fellowship Program",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=143",
	"Name": "National Endowment for the Humanities Fellowships for Research in Turkey",
	"Discipline": "Arts and Humanities",
	"Demographic": "All, International students",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=158",
	"Name": "National Garage Door Atlanta Asthma and Allergy Scholarship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Freshman, Sophomore, Junior, Senior, Bachelors degree (not currently enrolled), Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=73",
	"Name": "National Geographic Young Explorer Grant",
	"Discipline": "Life Sciences/ Health Sciences, Physical Sciences",
	"Demographic": "All, International students",
	"Degree": "Freshman, Sophomore, Junior, Senior, Bachelors degree (not currently enrolled), Masters, PhD, Professional Doctorate, Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=343",
	"Name": "National Humanities Center Fellowships",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=227",
	"Name": "National Nuclear Security Administration (NNSA) Graduate Fellowship Program",
	"Discipline": "",
	"Demographic": "",
	"Degree": "Masters"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=36",
	"Name": "National Physical Science Consortium (NPSC) Graduate Fellowship",
	"Discipline": "Engineering, Life Sciences/ Health Sciences, Physical Sciences",
	"Demographic": "",
	"Degree": "Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=247",
	"Name": "Native American Congressional Internship Program",
	"Discipline": "Open to All Disciplines",
	"Demographic": "Minorities",
	"Degree": "Junior, Senior, Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=344",
	"Name": "NEH-Hagley Postdoctoral Fellowship on Business, Culture, and Society",
	"Discipline": "Arts and Humanities, Social Sciences, Interdisciplinary",
	"Demographic": "",
	"Degree": "Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=310",
	"Name": "New Israel Fund Social Justice Fellowship in Israel",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Senior"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=292",
	"Name": "NIH MD/PhD Partnership Training Program",
	"Discipline": "Not Specified",
	"Demographic": "",
	"Degree": "Bachelors degree (not currently enrolled), Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=255",
	"Name": "NIH Oxford-Cambridge Scholars Program",
	"Discipline": "Physical Sciences",
	"Demographic": "",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=93",
	"Name": "NPSC Graduate Fellowship",
	"Discipline": "Engineering, Physical Sciences",
	"Demographic": "First generation college students , Minorities, Women",
	"Degree": "Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=58",
	"Name": "NRC Research Associateship Program",
	"Discipline": "Engineering, Life Sciences/ Health Sciences, Physical Sciences",
	"Demographic": "International students",
	"Degree": "Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=137",
	"Name": "NSF East Asia and Pacific Summer Institutes for U.S. Graduate Students (EAPSI)",
	"Discipline": "Engineering, Life Sciences/ Health Sciences, Physical Sciences, Social Sciences, Interdisciplinary",
	"Demographic": "",
	"Degree": "Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=90",
	"Name": "NSF Graduate Research Fellowship",
	"Discipline": "Engineering, Life Sciences/ Health Sciences, Physical Sciences, Social Sciences, Interdisciplinary",
	"Demographic": "Minorities, Women",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=224",
	"Name": "Nuclear Energy University Program Scholarships and Fellowships",
	"Discipline": "",
	"Demographic": "",
	"Degree": "Masters, Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=295",
	"Name": "Obama Foundation Fellowship",
	"Discipline": "",
	"Demographic": "",
	"Degree": ""
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=233",
	"Name": "ORISE Internships, Fellowships, and Research Experiences",
	"Discipline": "",
	"Demographic": "",
	"Degree": "Masters, PhD, Post Doctorate, Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=140",
	"Name": "P.E.O. Scholar Awards (PSA)",
	"Discipline": "Open to All Disciplines",
	"Demographic": "Women",
	"Degree": "PhD, Professional Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=109",
	"Name": "Palmetto Administrative Fellowship Program",
	"Discipline": "Life Sciences/ Health Sciences",
	"Demographic": "",
	"Degree": "Masters"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=156",
	"Name": "Pan Am Flight 103 Legacy Award",
	"Discipline": "",
	"Demographic": "All, International students",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=82",
	"Name": "Paul & Daisy Soros Fellowships for New Americans, The",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Masters, PhD, Professional Doctorate, Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=204",
	"Name": "Peace Corps",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Bachelors degree (not currently enrolled)"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=112",
	"Name": "PERC Graduate Fellowship",
	"Discipline": "",
	"Demographic": "",
	"Degree": "Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=113",
	"Name": "PERC Impact Fellowship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "All",
	"Degree": "Masters, PhD, Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=95",
	"Name": "Pharma Foundation Pre-Doctoral Fellowship",
	"Discipline": "Life Sciences/ Health Sciences",
	"Demographic": "",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=197",
	"Name": "Phi Kappa Phi Study",
	"Discipline": "Open to All Disciplines",
	"Demographic": "International students",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=40",
	"Name": "PhRMA Foundation Pre Doctoral Fellowship, Adherence Improvement",
	"Discipline": "Life Sciences/ Health Sciences",
	"Demographic": "All, International students",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=180",
	"Name": "Pickering Fellowship",
	"Discipline": "Arts and Humanities, Social Sciences",
	"Demographic": "First generation college students , Demonstrates Financial Need, Minorities, Women",
	"Degree": "Junior, Senior, Bachelors degree (not currently enrolled)"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=198",
	"Name": "PPIA Fellowship Program",
	"Discipline": "",
	"Demographic": "",
	"Degree": ""
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=226",
	"Name": "Presidential Management Fellows Program",
	"Discipline": "Not Specified",
	"Demographic": "",
	"Degree": "Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=346",
	"Name": "Presidential Scholars in Society and Neuroscience",
	"Discipline": "Arts and Humanities, Life Sciences/ Health Sciences, Physical Sciences, Social Sciences, Interdisciplinary",
	"Demographic": "All",
	"Degree": "Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=243",
	"Name": "Princess Grace Awards",
	"Discipline": "Arts and Humanities",
	"Demographic": "",
	"Degree": "Bachelors degree (not currently enrolled), Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=205",
	"Name": "Princeton in Africa",
	"Discipline": "",
	"Demographic": "",
	"Degree": "Senior, Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=206",
	"Name": "Princeton in Asia",
	"Discipline": "",
	"Demographic": "",
	"Degree": "Senior, Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=207",
	"Name": "Princeton in Latin America",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Masters, PhD, Professional Doctorate, Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=347",
	"Name": "Princeton Society of Fellows",
	"Discipline": "Arts and Humanities, Life Sciences/ Health Sciences, Social Sciences, Interdisciplinary",
	"Demographic": "All, International students",
	"Degree": "Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=100",
	"Name": "ProInspire Fellowship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "All",
	"Degree": "Masters"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=257",
	"Name": "Project Global Officer (GO)",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Masters, Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=354",
	"Name": "Queen's University Clinton Award for Peace and Reconciliation",
	"Discipline": "Arts and Humanities, Social Sciences, Interdisciplinary, Open to All Disciplines",
	"Demographic": "Women",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Masters, Undergraduate, Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=289",
	"Name": "Randall Blair Isenberg Alcohol Addiction Awareness Scholarship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Masters, PhD, Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=242",
	"Name": "Randy Pausch Scholarship Fund",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Freshman, Sophomore, Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=308",
	"Name": "Rashi Fein Internship in Health Policy",
	"Discipline": "Arts and Humanities, Life Sciences/ Health Sciences, Social Sciences",
	"Demographic": "",
	"Degree": "Junior, Senior, Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=176",
	"Name": "Rhodes Scholarships, The",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Junior, Senior, Bachelors degree (not currently enrolled), Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=288",
	"Name": "Robert Bosch Foundation Fellowship Program",
	"Discipline": "",
	"Demographic": "",
	"Degree": "Bachelors degree (not currently enrolled), Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=127",
	"Name": "Robert H. N. Ho Family Foundation Dissertation Fellowships in Buddhist Studies",
	"Discipline": "Arts and Humanities, Social Sciences",
	"Demographic": "International students",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=128",
	"Name": "Robert H. N. Ho Family Foundation Fellowships in Buddhist Studies, The",
	"Discipline": "Arts and Humanities, Social Sciences",
	"Demographic": "International students",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=202",
	"Name": "Robert Noyce Teacher Scholarship Program",
	"Discipline": "",
	"Demographic": "",
	"Degree": ""
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=209",
	"Name": "Rotary Global Grant Scholarships",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Bachelors degree (not currently enrolled), Masters, PhD, Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=210",
	"Name": "Rotary Peace Fellowship",
	"Discipline": "",
	"Demographic": "",
	"Degree": "Bachelors degree (not currently enrolled)"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=91",
	"Name": "Ruth L. Kirschstein National Research Service Award (NRSA) Individual Pre-doctoral Fellowship (F31)",
	"Discipline": "Life Sciences/ Health Sciences",
	"Demographic": "Minorities",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=177",
	"Name": "Schwarzman Scholars",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Junior, Senior, Bachelors degree (not currently enrolled), Masters, Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=229",
	"Name": "Science and Technology Policy Fellowships",
	"Discipline": "Engineering",
	"Demographic": "",
	"Degree": "Masters, PhD, Post Doctorate, Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=223",
	"Name": "Science Education Programs at National Energy Technology Laboratory",
	"Discipline": "",
	"Demographic": "",
	"Degree": "Bachelors degree (not currently enrolled), Masters, PhD, Undergraduate, Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=92",
	"Name": "Science to Achieve Results Fellowship Program",
	"Discipline": "Engineering, Physical Sciences, Social Sciences",
	"Demographic": "",
	"Degree": "Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=118",
	"Name": "Scripps Fellowship",
	"Discipline": "",
	"Demographic": "",
	"Degree": "Masters, Professional Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=345",
	"Name": "SFI Omidyar Postdoctoral Fellowship",
	"Discipline": "Life Sciences/ Health Sciences, Physical Sciences, Social Sciences, Interdisciplinary",
	"Demographic": "All, International students",
	"Degree": "Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=291",
	"Name": "Silver Scholar Program, The",
	"Discipline": "",
	"Demographic": "",
	"Degree": ""
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=261",
	"Name": "Skoll Scholarship, The",
	"Discipline": "",
	"Demographic": "",
	"Degree": "Bachelors degree (not currently enrolled)"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=265",
	"Name": "Smithsonian Fellowship Opportunities",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": ""
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=306",
	"Name": "Somers Aging and Long-Term Care Research Internship",
	"Discipline": "",
	"Demographic": "",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=45",
	"Name": "Spencer Dissertation Fellowship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "All, International students",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=203",
	"Name": "SQCC Research Fellowship Program in Oman",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": ""
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=53",
	"Name": "SSRC Dissertation Proposal Development Fellowship",
	"Discipline": "Arts and Humanities, Social Sciences",
	"Demographic": "International students",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=52",
	"Name": "SSRC Mellon International Dissertation Research Fellowship",
	"Discipline": "Arts and Humanities, Social Sciences",
	"Demographic": "All, International students",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=211",
	"Name": "Teach for America",
	"Discipline": "",
	"Demographic": "",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Masters, PhD, Professional Doctorate, Post Doctorate, Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=312",
	"Name": "Teaching Fellow Positions",
	"Discipline": "Arts and Humanities, Social Sciences, Interdisciplinary",
	"Demographic": "",
	"Degree": "PhD, Post Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=318",
	"Name": "The Cordisco & Saile Leukemia Scholarship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Masters, PhD, Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=321",
	"Name": "The Healthline & NAMI Stronger Scholarship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Freshman, Junior, Senior, Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=213",
	"Name": "Tillman Scholars",
	"Discipline": "",
	"Demographic": "",
	"Degree": ""
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=96",
	"Name": "Tobacco-Related Disease Research Program Dissertation Award",
	"Discipline": "Life Sciences/ Health Sciences",
	"Demographic": "International students",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=214",
	"Name": "Travelers Summer Research Fellowship Program",
	"Discipline": "Life Sciences/ Health Sciences, Physical Sciences",
	"Demographic": "Demonstrates Financial Need, Minorities",
	"Degree": "Junior, Senior"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=215",
	"Name": "Trudeau Doctoral Scholarship, The",
	"Discipline": "Social Sciences",
	"Demographic": "",
	"Degree": ""
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=355",
	"Name": "UCLA Law Fellows Program",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Sophomore, Junior, Senior"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=179",
	"Name": "Udall Undergraduate Scholarship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "Minorities",
	"Degree": "Sophomore, Junior"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=86",
	"Name": "UNCF/Merck Graduate Science Research Dissertation Fellowships",
	"Discipline": "Engineering, Life Sciences/ Health Sciences, Physical Sciences",
	"Demographic": "Minorities",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=316",
	"Name": "Undergraduate Summer Research Fellowship",
	"Discipline": "Arts and Humanities, Arts and Humanities, Social Sciences, Social Sciences, Interdisciplinary, Interdisciplinary, Open to All Disciplines, Open to All Disciplines",
	"Demographic": "All, Women",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Masters, Undergraduate, Undergraduate, Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=278",
	"Name": "USC Alumni Scholarships",
	"Discipline": "Open to All Disciplines",
	"Demographic": "USC students",
	"Degree": ""
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=285",
	"Name": "USC Annenberg Fall, Spring, and Summer Scholarships for Current Students",
	"Discipline": "Social Sciences",
	"Demographic": "",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=275",
	"Name": "USC Association for Japan-U.S. Community Exchange (ACE) - Nikaido Fellowship",
	"Discipline": "Not Specified",
	"Demographic": "USC students",
	"Degree": "Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=298",
	"Name": "USC Bhutani Family Summer Research and Travel Fund",
	"Discipline": "Arts and Humanities",
	"Demographic": "USC students",
	"Degree": "Freshman, Sophomore, Junior, Senior, Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=281",
	"Name": "USC Dornsife Continuing Student Scholarships",
	"Discipline": "Arts and Humanities, Physical Sciences, Social Sciences",
	"Demographic": "USC students",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=266",
	"Name": "USC Dornsife Scholars Program",
	"Discipline": "Arts and Humanities, Life Sciences/ Health Sciences, Physical Sciences, Social Sciences",
	"Demographic": "USC students",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=267",
	"Name": "USC Dornsife Washington D.C. Program",
	"Discipline": "Open to All Disciplines",
	"Demographic": "USC students",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=296",
	"Name": "USC Douglas Nelson Award",
	"Discipline": "Arts and Humanities",
	"Demographic": "USC students",
	"Degree": "Freshman, Sophomore, Junior, Senior, Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=274",
	"Name": "USC Foreign Language and Area Studies (FLAS) Fellowships",
	"Discipline": "Arts and Humanities",
	"Demographic": "USC students",
	"Degree": "Masters, PhD, Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=349",
	"Name": "USC Global Fellows Internship Program",
	"Discipline": "Open to All Disciplines",
	"Demographic": "USC students",
	"Degree": "Freshman, Sophomore, Junior"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=130",
	"Name": "USC Graduate School Endowed PhD Fellowship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "USC students",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=133",
	"Name": "USC Graduate School Final Year Fellowship",
	"Discipline": "Arts and Humanities, Social Sciences",
	"Demographic": "USC students",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=131",
	"Name": "USC Graduate School Research Enhancement Fellowship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "International students, USC students",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=282",
	"Name": "USC Half Century Trojans Scholarships",
	"Discipline": "Arts and Humanities, Physical Sciences, Social Sciences",
	"Demographic": "USC students",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=297",
	"Name": "USC Kallins Hellenic Studies Summer Fellowship",
	"Discipline": "Arts and Humanities",
	"Demographic": "USC students",
	"Degree": "Freshman, Sophomore, Junior, Senior, Masters, PhD, Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=148",
	"Name": "USC Libraries Research Award",
	"Discipline": "Open to All Disciplines",
	"Demographic": "All, International students, USC students",
	"Degree": "Freshman, Sophomore, Junior, Senior, Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=280",
	"Name": "USC Marshall School of Business Scholarships for Continuing Students",
	"Discipline": "Arts and Humanities",
	"Demographic": "USC students",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=270",
	"Name": "USC Problems Without Passports",
	"Discipline": "Not Specified",
	"Demographic": "USC students",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=135",
	"Name": "USC Rockwell Dennis Hunt Scholastic Award",
	"Discipline": "Open to All Disciplines",
	"Demographic": "USC students",
	"Degree": "Masters, PhD, Professional Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=276",
	"Name": "USC Sayoko Kono Legacy Fund",
	"Discipline": "Open to All Disciplines",
	"Demographic": "USC students",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=279",
	"Name": "USC School of Architecture Endowed Scholarships",
	"Discipline": "Arts and Humanities",
	"Demographic": "Demonstrates Financial Need, Minorities, USC students",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=284",
	"Name": "USC School of Cinematic Arts Endowed Scholarships for Current Students",
	"Discipline": "Arts and Humanities",
	"Demographic": "USC students",
	"Degree": "Masters, PhD, Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=271",
	"Name": "USC Schwarzenegger Institute Spotlight Award",
	"Discipline": "Open to All Disciplines",
	"Demographic": "USC students",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=269",
	"Name": "USC Sidney Harman Academy for Polymathic Study",
	"Discipline": "Open to All Disciplines",
	"Demographic": "USC students",
	"Degree": "Masters, PhD, Post Doctorate, Undergraduate, Recently Graduated"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=272",
	"Name": "USC Student Opportunities for Academic Research (SOAR)",
	"Discipline": "Arts and Humanities, Life Sciences/ Health Sciences, Physical Sciences, Social Sciences",
	"Demographic": "USC students",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=273",
	"Name": "USC Summer Undergraduate Research Fund (SURF) and Summer Humanities Undergraduate Research Experience (SHURE)",
	"Discipline": "Arts and Humanities, Life Sciences/ Health Sciences, Physical Sciences, Social Sciences",
	"Demographic": "USC students",
	"Degree": ""
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=283",
	"Name": "USC Viterbi Scholarships for Continuing Students",
	"Discipline": "Engineering",
	"Demographic": "USC students",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=301",
	"Name": "USC WiSE Undergraduate Research Experience",
	"Discipline": "Not Specified",
	"Demographic": "USC students",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=65",
	"Name": "USGIF Scholarship Program",
	"Discipline": "",
	"Demographic": "",
	"Degree": "Freshman, Sophomore, Junior, Senior, Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=221",
	"Name": "Veterans & Military Family Scholarship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Masters, PhD, Professional Doctorate, Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=305",
	"Name": "Washington Internship on Social Insurance",
	"Discipline": "",
	"Demographic": "",
	"Degree": "Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=218",
	"Name": "WAVE Fellows",
	"Discipline": "",
	"Demographic": "First generation college students , Demonstrates Financial Need, Minorities, Women",
	"Degree": "Sophomore, Junior, Senior"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=219",
	"Name": "William J. Clinton Fellowship for Service in India",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Bachelors degree (not currently enrolled)"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=149",
	"Name": "Wonderland Award",
	"Discipline": "Open to All Disciplines",
	"Demographic": "All, International students, USC students",
	"Degree": "Freshman, Sophomore, Junior, Senior, Masters, PhD, Professional Doctorate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=286",
	"Name": "Wondershare Filmora Scholarship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Masters, PhD, Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=258",
	"Name": "Woodrow Wilson Dissertation Fellowship in Women's Studies",
	"Discipline": "Arts and Humanities, Social Sciences",
	"Demographic": "",
	"Degree": "PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=259",
	"Name": "Woodrow Wilson Teaching Fellowship",
	"Discipline": "",
	"Demographic": "",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Masters, PhD"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=244",
	"Name": "Worldstudio AIGA Scholarships",
	"Discipline": "Arts and Humanities",
	"Demographic": "Demonstrates Financial Need, Minorities",
	"Degree": "Masters, PhD, Undergraduate"
}, {
	"URL": "https://awardsdatabase.usc.edu/app/detail.asp?FellowshipID=260",
	"Name": "Yenching Academy Fellowship",
	"Discipline": "Open to All Disciplines",
	"Demographic": "",
	"Degree": "Senior, Bachelors degree (not currently enrolled), Recently Graduated"
}]`);

// if multiple keywords, applies AND intersection to keyword results
const searchAwards = function(keywords) {
    let results = [];
    awards.forEach(element => {
        for (let k in element) {
            if (element.hasOwnProperty(k)) {
                let allPresent = true;
                for (let idx in keywords) {
                    let keyword = keywords[idx].toLowerCase();
                    if (element[k].toLowerCase().indexOf(keyword) === -1) {
                        allPresent = false;
                        break;
                    }
                }
                if (allPresent) {
                    results.push(element['URL']);
                }
            }
        }
    });
    return results;
};
