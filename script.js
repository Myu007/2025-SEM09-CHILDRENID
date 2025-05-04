const questions = [
  {
    question: "Choose the more typical form of Salmonellosis:",
    answers: [
      { text: "gastro-enteritis", correct: true },
      { text: "septic form", correct: false },
      { text: "hemorragic form", correct: false },
      { text: "perforative colllitis", correct: false },
      { text: "appendicitis", correct: false },
    ],
  },
  {
    question: "Select how many days is incubation period in Salmonellosis?",
    answers: [
      { text: "from some hours  to 3 days", correct: true },
      { text: "2 days", correct: false },
      { text: "11-21 days ", correct: false },
      { text: "1-7 days", correct: false },
      { text: "2 months", correct: false },
    ],
  },
  {
    question: "Determine which transmission  way of Salmonellosis do you know?",
    answers: [
      { text: "fecal-oral way", correct: true },
      { text: "intramuscular", correct: false },
      { text: "intravenous", correct: false },
      { text: "sexually transmitted", correct: false },
      { text: "aerogenic", correct: false },
    ],
  },
  {
    question: "Determine following symptoms which are characterised salmonellosis more? ",
    answers: [
      { text: "acute tonsillitis   ", correct: true },
      { text: "strawberry tongue", correct: false },
      { text: "flaccid paralysis", correct: false },
      { text: "hepatosplenomegaly", correct: false },
      { text: "low grade fever", correct: false },
    ],
  },
  {
    question: "Select which signs show severity of Dysentry ?",
    answers: [
      { text: "Blood and mucos in the stool, high fever and intoxication", correct: true },
      { text: "Headache", correct: false },
      { text: "Poor appetite", correct: false },
      { text: "wattery diarrhea", correct: false },
      { text: "Temperature 37.5 0", correct: false },
    ],
  },
  {
    question: "Select  the part of a gastrointestinal tract which is damaged in Salmonellosis?",
    answers: [
      { text: "All parts of GIT", correct: true },
      { text: "Colon", correct: false },
      { text: "Stomach", correct: false },
      { text: "Small intestine", correct: false },
      { text: "Large intestine", correct: false },
    ],
  },
  {
    question: "5 years old child is having fever up to 39°C, abdominal pain, tenesmus, liquid  frequent stool  more then 12 times a day  small portions, green, with mucos and blood. The abdomen is retracted, painful in the left low region, the sigmoid intestine is in spasm during palpation. The anus is malleable. Conclude which disease is this?     ",
    answers: [
      { text: " Shigellosis", correct: true },
      { text: "Rotavirus infection", correct: false },
      { text: "Cholera", correct: false },
      { text: "Acute appendicitis", correct: false },
      { text: "Typhoid fever", correct: false },
    ],
  },
  {
    question: "A patient presents with sudden onset of fever 38°C, abdominal cramps, severe pain in left iliac ragion and bloody diarrhea. Stool culture reveals gram-negative bacilli. Which of the following is the most likely causative agent?",
    answers: [
      { text: "Shigella dysenteriae", correct: true },
      { text: "Salmonella enterica", correct: false },
      { text: "Escherichia coli", correct: false },
      { text: "Campylobacter jejuni", correct: false },
      { text: "Vibrio cholerae", correct: false },
    ],
  },
  {
    question: "A patient complains of watery diarrhea, nausea, vomiting, and low-grade fever. 3 days ago patient ate boiled eggs. Which organism is most likely responsible for this illness?",
    answers: [
      { text: "Shigella sonnei", correct: true },
      { text: "Salmonella typhi", correct: false },
      { text: "Salmonella enteritidis", correct: false },
      { text: "Campylobacter jejuni", correct: false },
      { text: "Escherichia coli O157:H7", correct: false },
    ],
  },
  {
    question: "A child presents with severe abdominal cramps, tenesmus, and passage of small volumes of bloody stool. Which pathogen is most likely causing this clinical presentation?",
    answers: [
      { text: "Shigella flexneri", correct: true },
      { text: "Salmonella enteritidis", correct: false },
      { text: "Campylobacter jejuni", correct: false },
      { text: "Vibrio cholerae", correct: false },
      { text: "Clostridium difficile", correct: false },
    ],
  },
  {
    question: "A patient presents with bloody diarrhea, fever, and abdominal cramps, tenesmus, severe pain in left iliac region. Stool microscopy shows numerous leukocytes, erytrocytes. Which organism is the most likely cause of this illness?",
    answers: [
      { text: "Shigella dysenteriae", correct: true },
      { text: "Salmonella enterica", correct: false },
      { text: "Escherichia coli O157:H7", correct: false },
      { text: "Campylobacter jejuni", correct: false },
      { text: "Yersinia enterocolitica", correct: false },
    ],
  },
  {
    question: "During an examination for epidemiological indications in Kindergarten Shigella Flexneri2a was isolated from the stool of a child K., 5 years old. A survey of parents revealed that a week ago the child complained of short, mild abdominal pain, as well as three loose stools without pathological impurities. Name the expected diagnosis.",
    answers: [
      { text: "Dysentry", correct: true },
      { text: "Salmonellosis", correct: false },
      { text: "Food poisoning", correct: false },
      { text: "Rotavirus indection", correct: false },
      { text: "Escherichiosis", correct: false },
    ],
  },
  {
    question: "Name the  type of E.coli which  is similar clinically to Dysentery ?",
    answers: [
      { text: "Enteroinvasive E.coli", correct: true },
      { text: "Enteropathogenic E.coli", correct: false },
      { text: "Enterotoxigenic E.coli", correct: false },
      { text: "Enterohemorrhagic E.coli", correct: false },
      { text: "Enteroаggregative E.coli", correct: false },
    ],
  },
  {
    question: "Choose the age group of children suffers more often  from viral intestinal infections ?",
    answers: [
      { text: "6-24 months", correct: true },
      { text: "3-7 years old", correct: false },
      { text: "7-10 years old", correct: false },
      { text: " over 12 years old and adults", correct: false },
      { text: "10-15 years old", correct: false },
    ],
  },
  {
    question: "Select the leading agents in the occurrence of Infectious toxic shock?",
    answers: [
      { text: "Endotoxins", correct: true },
      { text: "Neurotoxins", correct: false },
      { text: "Exotoxins", correct: false },
      { text: "Enterotoxins", correct: false },
      { text: "Hemagglutinin", correct: false },
    ],
  },
  {
    question: "Choose the pathogens of viral intestinal infections ?",
    answers: [
      { text: "rotaviruses", correct: true },
      { text: "human papillomavirus", correct: false },
      { text: "orthomyxoviruses", correct: false },
      { text: "paramyxoviruses ", correct: false },
      { text: "rhinoviruses", correct: false },
    ],
  },
  {
    question: "Identify the laboratory diagnostic which  is recommended to confirm dysbiosis ?",
    answers: [
      { text: "Bacteriological examination of feces", correct: true },
      { text: "Stool test", correct: false },
      { text: "CBC", correct: false },
      { text: "LFT", correct: false },
      { text: "Urin analysis", correct: false },
    ],
  },
  {
    question: "What type of vaccine is commonly used for preventing Rotavirus infection?",
    answers: [
      { text: "Live attenuated vaccine", correct: true },
      { text: "Inactivated vaccine", correct: false },
      { text: "Subunit vaccine", correct: false },
      { text: "Conjugate vaccine", correct: false },
      { text: "DNA vaccine", correct: false },
    ],
  },
  {
    question: "Select the age group which is most susceptible to Rotavirus infection?",
    answers: [
      { text: "Infants and young children", correct: true },
      { text: "Elderly adults", correct: false },
      { text: "Adolescents", correct: false },
      { text: "Middle-aged adults", correct: false },
      { text: "Immucompromised patients", correct: false },
    ],
  },
  {
    question: "Choose the one of statements regarding Rotavirus pathogenesis which is correct?",
    answers: [
      { text: "It damages the lining of the small intestine", correct: true },
      { text: "It primarily affects the respiratory system", correct: false },
      { text: "It spreads through sexual contact", correct: false },
      { text: "It causes inflammation of the liver", correct: false },
      { text: "It targets the central nervous system", correct: false },
    ],
  },
  {
    question: "Patient 10 years old, called an ambulance team. History: the disease began acutely with nausea, frequent vomiting, after vomiting, he notes some improvement in well-being, constant and intense pain in the epigastric region, and an increase in body temperature to 39C.  Epidemiological history: 8 hours before the illness, she was at a birthday party, ate a cake with butter cream, sandwiches with mayonnaise and sausage. Name preliminary diagnosis?",
    answers: [
      { text: "Salmonellosis", correct: true },
      { text: "Escherichiosis", correct: false },
      { text: "Dysentery", correct: false },
      { text: "Rotavirus infection", correct: false },
      { text: "Staphylococcal food poisoning", correct: false },
    ],
  },
  {
    question: "Specify what is necessary in the treatment of dysbiosis?",
    answers: [
      { text: "Prescribe antibiotics", correct: true },
      { text: "Prescribe hormones", correct: false },
      { text: "Cancel antibiotics, prescribe Probiotics", correct: false },
      { text: "Prescribe Corticosteroids", correct: false },
      { text: "Prescribe cytostatics", correct: false },
    ],
  },
  {
    question: "Explain what is the Probiotics?",
    answers: [
      { text: "Living microorganisms and substances of microbial origin", correct: true },
      { text: "Immunoglobulins", correct: false },
      { text: "Enzymes", correct: false },
      { text: "Enterosorbents", correct: false },
      { text: "Antitoxins", correct: false },
    ],
  },
  {
    question: "Boy 4 years old. Got sick in kindergarten: repeated vomiting, increased body temperature to 38.30C, loose stools, watery, profuse, yellow-green in color with not digested meal in stool. Upon admission to the hospital (2nd day of illness): condition is severe, body temperature 38.50C, lethargic, drinks reluctantly, capricious. The skin is pale, with a marbled tint, tissue turgor is reduced. The tongue is covered with a white coating, dry, the oral mucosa is dry, there is hyperemia of the palatine arches and the posterior wall of the pharynx. CBC - Hb - 134 g/l, Er - 4.06, leuk - 8.0, lymph - 60%, mon - 3%, ESR – 6 mm/h. Name the current disease.",
    answers: [
      { text: "Rotavirus infection", correct: true },
      { text: "Enterovirus Infection", correct: false },
      { text: "Adenovirus Infection", correct: false },
      { text: "Salmonellosis", correct: false },
      { text: "Escherichiosis", correct: false },
    ],
  },
  {
    question: "Child K., 3 years old, was admitted to the Infectious Diseases Hospital with vomiting, loose watery stools, and fever. At the appointment, the child’s condition is moderate, low-grade fever, liquefy stools with mucus, undigested lumps, vomiting once. Oral rehydration was prescribed. A general blood test revealed lymphocytosis, ESR 12 mm/hour. In the Stool Examination there is a small amount of mucus, 5-7 leukocytes in the field of view.",
    answers: [
      { text: "Rotavirus infection", correct: true },
      { text: "Enterovirus Infection", correct: false },
      { text: "Adenovirus Infection", correct: false },
      { text: "Salmonellosis", correct: false },
      { text: "Escherichiosis", correct: false },
    ],
  },
  {
    question: "Child 4 months. fell ill acutely with an increase in  to 38.5C. Repeated vomiting after eating and drinking, stools per day 8 times liquid brown-green color in the form of \"swamp mud\". In examination, the patient's condition is severe, restless, thirst is expressed. pale skin, the abdomen is moderately swollen, rumbling along the small intestine. Conclude what is this disease?",
    answers: [
      { text: "Amoebiasis", correct: true },
      { text: "Dysentery", correct: false },
      { text: "Salmonellosis", correct: false },
      { text: "Secondary bacterial infection", correct: false },
      { text: "Botulism", correct: false },
    ],
  },
  {
    question: "A 4-year-old child has T-39C, a liquid stool of greenish color with a large amount of mucus. On the 2nd day, tenesmus joined, the stool became  with blood admixture. The abdomen is retracted, the sigma is spasmotic. Make a diagnosis?",
    answers: [
      { text: "Shigellosis", correct: true },
      { text: " Amoebiasis", correct: false },
      { text: " Salmonellosis", correct: false },
      { text: " Botulism", correct: false },
      { text: "Cholera", correct: false },
    ],
  },
  {
    question: "Boy 3 years old. Got sick in kindergarten: repeated vomiting, increased body temperature to 38.30C, loose stools, watery, profuse, yellow-green in color with undigested meal in stool. The tongue is covered with a white coating, dry, the oral mucosa is dry, there is hyperemia of the palatine arches and the posterior wall of the pharynx. Over the past day, there was vomiting 5 times, stool 8 times.  CBC - Hb - 134 g/l, Er - 4.06, leuk - 8.0, lymph - 60%, mon - 3%, ESR – 6 mm/h. No pathogenic microbes of the intestinal family were found in stool cultures. Make a diagnosis.",
    answers: [
      { text: "Rotavirus infection", correct: true },
      { text: " Amoebiasis", correct: false },
      { text: " Salmonellosis", correct: false },
      { text: "Cholera", correct: false },
      { text: "Escherichiosis by Enterotoxigenic E.coli", correct: false },
    ],
  },
  {
    question: "Infer the most common complication in intestinal infections? ",
    answers: [
      { text: "infectious-toxic shock, dehydratation", correct: true },
      { text: " anemia", correct: false },
      { text: " pyelonephritis", correct: false },
      { text: "arthritis", correct: false },
      { text: "acute appendicitis", correct: false },
    ],
  },
  {
    question: "Identify in exicosis of the 3rd degree, body weight loss is?",
    answers: [
      { text: "9-10% or more", correct: true },
      { text: "1-3%", correct: false },
      { text: "3-5  %", correct: false },
      { text: "6-9%", correct: false },
      { text: "12-15%", correct: false },
    ],
  },
  {
    question: "Determine the diagnostic method for dysbiosis:",
    answers: [
      { text: "In a bacteriological study of stool", correct: true },
      { text: "During an allergic tests", correct: false },
      { text: "In a serological examination of blood", correct: false },
      { text: "In the USG of the abdominal cavity", correct: false },
      { text: "PCR test of sputum ", correct: false },
    ],
  },
  {
    question: "Specify the medicines which are used for  treatment of Dysbacteriosis?",
    answers: [
      { text: "Probiotics", correct: true },
      { text: "Antibiotics", correct: false },
      { text: "Corticosteroids", correct: false },
      { text: "Immunoglobulins", correct: false },
      { text: "Aminoglycosides", correct: false },
    ],
  },
  {
    question: "Choose the main indications for prescribing antibiotics in the treatment of acute intestinal infections in children?",
    answers: [
      { text: "Blood and pus in a stool", correct: true },
      { text: "Liquid watery stool", correct: false },
      { text: "Moderate intoxication", correct: false },
      { text: "Mild dehydration", correct: false },
      { text: "Repeated vomiting", correct: false },
    ],
  },
  {
    question: "Select the etiotropic therapy which should be used for severe dysentery?",
    answers: [
      { text: "Ciprofloxacin 250mg BID ", correct: true },
      { text: "Aminoglycosides (gentamicin 80 mg 1 time a day )", correct: false },
      { text: "Cephalosporins Ceftriaxone 1g IM in day", correct: false },
      { text: "Erythromycin (250mg*4 times in day)", correct: false },
      { text: "Penicilline (100mg 4 times IM)", correct: false },
    ],
  },
  {
    question: "Child 4 months became ill acutely with an increase temperature  to 38.5 C. Repeated vomiting after eating and drinking, stools per day 10 times liquid brown-green color in the form of \"swamp mud\".  In examination, the patient's condition is severe, restless, thirst is expressed, pale skin, periorbital cyanosis. lips are bright, dry. Large fontanel sunken. Heart sounds are muffled. The abdomen is moderately swollen, rumbling along the small intestine. Infer the stage of dehydration in this case.",
    answers: [
      { text: "Severe dehydration", correct: true },
      { text: "No dehydration", correct: false },
      { text: "Mild dehydration", correct: false },
      { text: "Moderate dehydration", correct: false },
      { text: "Hypovolemic shock", correct: false },
    ],
  },
  {
    question: "Child 4 months became ill acutely with an increase temperature  to 38.5 C. Repeated vomiting after eating and drinking, stools per day 10 times liquid brown-green color in the form of \"swamp mud\".  In examination, the patient's condition is severe, restless, thirst is expressed, pale skin, periorbital cyanosis. lips are bright, dry. Large fontanel sunken. Heart sounds are muffled. The abdomen is moderately swollen, rumbling along the small intestine. Chooce the correct tactic of rehydration in this case.",
    answers: [
      { text: "Plan C", correct: true },
      { text: "Plan A", correct: false },
      { text: "Plan B", correct: false },
      { text: "Rehydration therapy is not indicated", correct: false },
      { text: "Just Intravenous Antibiotics are indicated", correct: false },
    ],
  },
  {
    question: "A 10-month-old child was admitted to the department of acute intestinal infections with a typical clinical picture of acute gastroenteritis. E. Coli 0–157-H7 was detected in stool cultures. Despite adequate antibacterial therapy and rehydration, the child’s condition worsened. In the first 3 days, severe pallor, scleral injection, and pasty facial appearance began to be noted. On the 4th day of illness, the skin acquired a soft icteric tint, the injection sites were bleeding, and there were single petechial elements on the legs and thighs. Urination rarely, sparingly. Stools 6–8 times a day, watery. There is no visible swelling. The swelling of the face and lumbar region remains. The child is very lethargic. Meningeal symptoms are negative. Heart rate - 150–164 beats in 1 min. RR - 38–40 per minute. Auscultation - breathing is harsh, no wheezing. Complete blood count: er. - 2.6 x 10/l, Hb - 96 g/l, leuk - 27x109/l, m - 10% . Biochemical blood test: total protein - 53 g/l, albumin - 37%, creatinine - 180 µmol/l, urea - 11.8 mmol/l. Glomerular filtration - 52 ml/min. General urine analysis: relative density of urine - 1008, protein - 1.65 g/l, leukocytes - 15-18 in the field, erythrocytes - 30-40 in the field. Name the complication mentioned in this case.",
    answers: [
      { text: "HUS (Hemolitic uremic syndrome)", correct: true },
      { text: "ITS(Infectious toxic shock)", correct: false },
      { text: "Hypovolemic shock", correct: false },
      { text: "Severe Dehydratation", correct: false },
      { text: "Acute liver failure", correct: false },
    ],
  },
  {
    question: "Child 4 months. fell ill acutely with an increase in to 38.50C. Repeated vomiting after eating and drinking, stools per day 8 times liquid brown-green color in the form of \"swamp mud\".  In examination, the patient's condition is severe, restless, thirst is expressed, pale skin, periorbital cyanosis. lips are bright, dry. Large fontanel sunken. Heart sounds are muffled. The abdomen is moderately swollen, rumbling along the small intestine. Conclude the disease.",
    answers: [
      { text: "Acute Gastro-Enteritis. Salmonellosis, pobably", correct: true },
      { text: "Acute enterocolitis. Shigellosis", correct: false },
      { text: "Enterohemorragic E.coli, HUS", correct: false },
      { text: "Severe dehydration, Rotavirus infection", correct: false },
      { text: "Food poisoning, Staphylococcus intoxication", correct: false },
    ],
  },
  {
    question: "Count the amount of liquid which  must be given to the patient with acute intestinal infections in moderate dehydration ?",
    answers: [
      { text: "75 ml / kg for 4 - 6 hours", correct: true },
      { text: "50-100 for every stool", correct: false },
      { text: "100 - 400 ml for every stool ", correct: false },
      { text: "50 - 100 ml / kg ", correct: false },
      { text: "10-15 ml per 1kg BW in 3 hours", correct: false },
    ],
  },
  {
    question: "How much liquid must be given to the patient under 2yo with acute intestinal infections without dehydration ?",
    answers: [
      { text: "50-100 ml for every stool to children under 2 years", correct: true },
      { text: "50-100 ml/kg to children under 2 years", correct: false },
      { text: "100-200 ml/kg to children older than 2 years", correct: false },
      { text: "75 ml/kg for 4-6 hours", correct: false },
      { text: "10-15 ml per 1kg BW in 3 hours", correct: false },
    ],
  },
  {
    question: "Select the transmission way of hepatitis E?",
    answers: [
      { text: "Fecal-oral", correct: true },
      { text: "Parenteral", correct: false },
      { text: "Sexually transmitted", correct: false },
      { text: "Aierogenic way", correct: false },
      { text: "Vector-borne way", correct: false },
    ],
  },
  {
    question: "Determine which of the following markers confirm viral hepatitis E?",
    answers: [
      { text: "anti-HEV IgM", correct: true },
      { text: "anti-HBeAg IgM", correct: false },
      { text: " anti-HDV IgM", correct: false },
      { text: "anti-HCV IgM", correct: false },
      { text: "anti-HBsAg IgM", correct: false },
    ],
  },
  {
    question: "Explain which laboratory tests should be used in viral hepatitis?",
    answers: [
      { text: "ALT, AST level", correct: true },
      { text: "CSF analysis", correct: false },
      { text: "CBC", correct: false },
      { text: "Kidney function tests", correct: false },
      { text: "Allergic test", correct: false },
    ],
  },
  {
    question: "Choose the antigene characterises the viral hepatitis A?",
    answers: [
      { text: "HAV- Ag", correct: true },
      { text: "HCV- Ag", correct: false },
      { text: "HDV- Ag", correct: false },
      { text: "HBs Ag", correct: false },
      { text: "HEV- Ag", correct: false },
    ],
  },
  {
    question: "Choose how many days is incubation period in viral hepatitis E?",
    answers: [
      { text: "15-60 days", correct: true },
      { text: "21-25 days", correct: false },
      { text: "1-2 days", correct: false },
      { text: "3-14 days", correct: false },
      { text: "180 days", correct: false },
    ],
  },
  {
    question: "Choose the antigene characterises viral hepatitis E?",
    answers: [
      { text: "HEV-Ag", correct: true },
      { text: "HDV- Ag", correct: false },
      { text: "HAV- Ag", correct: false },
      { text: "HBsAg", correct: false },
      { text: "HCV-Ag", correct: false },
    ],
  },
  {
    question: "A 5th grade student has been ill for the second day. When contacting the school doctor for medical help, herpangina was diagnosed. Which disease it can be?",
    answers: [
      { text: "Enteroviral infection", correct: true },
      { text: "Viral hepatitis A", correct: false },
      { text: "Viral hepatitis E", correct: false },
      { text: "Viral hepatitis B", correct: false },
      { text: "Flu", correct: false },
    ],
  },
  {
    question: "12 years old kid, complaints about temperature 39.3°C, headache in the frontal area, pain in the eyeballs, photophobia, pain in muscles, dry cough. Became ill suddenly one day before. Objectively: condition is severe. Hyperemia of the face, eyes are watery, injection of sclera. Pulse 96/min., rhythmic. Tones of heart are hypotonic. Dry wheezes in both lungs. Mucosa of epiglottis is hyperemic, grainy, vessels are extended. Meningeal symptoms are not present. Analysis of blood: leuk – 3x109/l, lymp-60%, mon – 7%. What is the most possible diagnosis?",
    answers: [
      { text: "Inluenza", correct: true },
      { text: "Viral hepatitis A", correct: false },
      { text: "Viral hepatitis E", correct: false },
      { text: "Viral hepatitis B", correct: false },
      { text: "Enteroviral infection", correct: false },
    ],
  },
  {
    question: "Anna aged 6 months acute ill with temperature 37.5 С, dry cough, on the 2nd day of illness hoarseness and difficult breathing. Indicate the most likely diagnosis.",
    answers: [
      { text: "Parainfluenza, croup sydrome", correct: true },
      { text: "Flu", correct: false },
      { text: "Viral hepatitis A", correct: false },
      { text: "Enteroviral infection", correct: false },
      { text: "Bronchiolitis, RDS", correct: false },
    ],
  },
  {
    question: " The 5yo patient has complains on abundant excretions from a nose, pus discharge from both eyes. On examination – dry of skin, nose excoriation, in a pharynx – mild hyperemia. Temperature of body is subfebrile. Pathological changes of internal organs are absent. Which acute respiratory viral infection carries the patient?",
    answers: [
      { text: "Adenoviral infection", correct: true },
      { text: "Flu", correct: false },
      { text: "Otitis media", correct: false },
      { text: "Enteroviral infection", correct: false },
      { text: "Parainfluenza", correct: false },
    ],
  },
  {
    question: "The child 3 months old acutely ill, temperature 38.5 C, cough, runny nose and difficult breathing expiratory character up to 60 per minute. With an objective examination cyanosis of the perioral area, respiratory failure, the participation of auxiliary muscles in the act of breathing. In the lungs moist wheezing on both sides. In the family, the oldest child is sick with ARI. What is the most likely diagnosis?",
    answers: [
      { text: "Respiratory synsitial infection, Bronchiolitis", correct: true },
      { text: "Influenza, pneumonia", correct: false },
      { text: "Enterovirus infection", correct: false },
      { text: "Parainfluenza, bronchitis", correct: false },
      { text: "Adenovirus infection, pneumonia", correct: false },
    ],
  },
  {
    question: " An 8-year-old boy was admitted for treatment on the 15-16th day of illness. The skin is moderately icteric, the sclera is intensely icteric. The liver is palpated by 2-3-4 cm, the spleen is not enlarged. Nausea, vomiting and hemorrhagic manifestations are absent. Urine dark, feces \"clay-like color\". Appetite is quite satisfactory. Anti-HAV Ig G was found in the blood. Conclude what is this disease?",
    answers: [
      { text: "Viral hepatitis A, convalescent stage", correct: true },
      { text: "Viral hepatitis A, acute stage", correct: false },
      { text: "Viral hepatitis E, acute stage", correct: false },
      { text: "Viral hepatitis B, acute stage", correct: false },
      { text: "Viral hepatitis C, chronic", correct: false },
    ],
  },
  {
    question: "Explain how the condition of a patient with hepatitis B changes when jaundice appears?",
    answers: [
      { text: "The condition is getting worse", correct: true },
      { text: "Condition improves", correct: false },
      { text: "Condition does not change", correct: false },
      { text: "Hemorragic sings may join", correct: false },
      { text: "Proteinuria appears", correct: false },
    ],
  },
  {
    question: "Explain which transmission way of hepatitis D do you know?",
    answers: [
      { text: "Parenteral", correct: true },
      { text: "Fecal-oral", correct: false },
      { text: "Contact", correct: false },
      { text: "Aerogenic way", correct: false },
      { text: "Due to contaminated water", correct: false },
    ],
  },
  {
    question: "Select the common season for viral hepatitis D?",
    answers: [
      { text: "All year", correct: true },
      { text: "Spring and summer", correct: false },
      { text: "Winter or early spring", correct: false },
      { text: "Autumn", correct: false },
      { text: "Winter", correct: false },
    ],
  },
  {
    question: "Select  how many days is incubation period in viral hepatitis D?",
    answers: [
      { text: "1 to 6 months", correct: true },
      { text: "21-25 days", correct: false },
      { text: "20 to 50 days", correct: false },
      { text: "45-180 days", correct: false },
      { text: "1 week", correct: false },
    ],
  },
  {
    question: "Mark the clinical symptom which is indication of severity in viral hepatitis?",
    answers: [
      { text: "Intoxication syndrome", correct: true },
      { text: "Dark urine", correct: false },
      { text: "Cough", correct: false },
      { text: "Acholic feces", correct: false },
      { text: "Fever", correct: false },
    ],
  },
  {
    question: "Mark the clinical symptom which is indication of severity in viral hepatitis?",
    answers: [
      { text: "Hemorrhagic syndrome", correct: true },
      { text: "Acholic feces", correct: false },
      { text: "Dark urine", correct: false },
      { text: "Pruritus", correct: false },
      { text: "Fever", correct: false },
    ],
  },
  {
    question: "Infer the  laboratory indication of severity in viral hepatitis?",
    answers: [
      { text: "Decrease prothrombin index", correct: true },
      { text: "Proteinuria", correct: false },
      { text: "Elevation of ESR", correct: false },
      { text: "Elevation  of total bilirubin level", correct: false },
      { text: "Elevation of Albumine", correct: false },
    ],
  },
  {
    question: "Choose the laboratory indication of severity in viral hepatitis?",
    answers: [
      { text: "Increase bilirubin level", correct: true },
      { text: "Proteinuria", correct: false },
      { text: "Elevation of ESR", correct: false },
      { text: "Increase prothrombin index", correct: false },
      { text: "Elevation of GGT", correct: false },
    ],
  },
  {
    question: "Describe  the indications of severity of hepatitis are:",
    answers: [
      { text: "Degree of intoxication and severity of jaundice", correct: true },
      { text: "Dark urine", correct: false },
      { text: "Level of alkaline phosphatase", correct: false },
      { text: "ALT, AST", correct: false },
      { text: "The general analysis of blood", correct: false },
    ],
  },
  {
    question: "Explain what is not used to treat liver failure?",
    answers: [
      { text: "Cytostatics", correct: true },
      { text: "Hormones", correct: false },
      { text: "Protease inhibitors", correct: false },
      { text: "Intravenous solutions", correct: false },
      { text: "Hepatoprotectors", correct: false },
    ],
  },
  {
    question: "Which meal is not allowed for patients in acute viral hepatitis",
    answers: [
      { text: "Roasted, spicy meal", correct: true },
      { text: "Dairy products", correct: false },
      { text: "Boiled chicken", correct: false },
      { text: "Fruits", correct: false },
      { text: "Vegetables", correct: false },
    ],
  },
  {
    question: "Choose the patterns of basic therapy in acute viral hepatitis?",
    answers: [
      { text: "Regime and diet, medical supervision", correct: true },
      { text: "Antibiotic", correct: false },
      { text: "Hormones", correct: false },
      { text: "Oral detoxification", correct: false },
      { text: "Cytostatics", correct: false },
    ],
  },
  {
    question: "Infer in which viral hepatitis is acute hepatic encephalopathy the least common?",
    answers: [
      { text: "HAV", correct: true },
      { text: "HBV", correct: false },
      { text: "HEV", correct: false },
      { text: "HDV", correct: false },
      { text: "HCV", correct: false },
    ],
  },
  {
    question: "Choose which laboratory parameters are determine the severity of hepatitis?",
    answers: [
      { text: "Decrease in prothrombin index", correct: true },
      { text: "Activity of ALT, AST", correct: false },
      { text: "Level of urobilin in the urine", correct: false },
      { text: "Thymol test", correct: false },
      { text: "Increased ESR", correct: false },
    ],
  },
  {
    question: "Child, 7 months old, was admitted to the infectious diseases hospital with complaints of increased body temperature to 37.80C, lethargy, poor appetite, and repeated vomiting. From the medical history: became ill 12 days ago, when low-grade fever appeared, and appetite decreased sharply.In the blood serum, total bilirubin is 180 µmol/l, direct – 112 µmol/l, ALT – 128 U/l (N – 40), AST – 118 U/l (N – 40), thymol test - 8, Total protein – 56 g/l, PTI – 80%.Marker spectrum: HBsAg – positive, HBeAg – positive, a-HBc IgM – positive. Name the current disease.",
    answers: [
      { text: "viral hepatitis B", correct: true },
      { text: "viral hepatitis A", correct: false },
      { text: "viral hepatitis E", correct: false },
      { text: "viral hepatitis C", correct: false },
      { text: "viral hepatitis D", correct: false },
    ],
  },
  {
    question: "14-year-old patient has acute ill: body temperature 390C, arthralgia, headache, repeated vomiting. On day 3 of the disease, severe weakness, headache, icteric sclera. Jaundice is moderate, size of the liver +1 cm from the rib margin. In the evening of the same day, excitation, shouting. An hour later, there is no consciousness. Liver size decreased, hematuria appears.  In anamnesis, Kid had appendectomy 2 month ago. Infer the more likely diagnosis?",
    answers: [
      { text: "Fulminant form viral hepatitis B", correct: true },
      { text: "Fulminant form viral hepatities C", correct: false },
      { text: "Fulminant form viral hepatitis A", correct: false },
      { text: "Fulminant form viral hepatitis E", correct: false },
      { text: " Chronic viral hepatitis D ", correct: false },
    ],
  },
  {
    question: "Indicate the level of bilirubin for moderate form of viral hepatitis B:",
    answers: [
      { text: "from 85 to 200 mmol / l", correct: true },
      { text: "up to 20.5 mmol / l", correct: false },
      { text: "up to 85 mmol / l", correct: false },
      { text: "more than 200 mmol / l", correct: false },
      { text: "all answers are correct", correct: false },
    ],
  },
  {
    question: "Indicate the level of bilirubin in severe forms of viral hepatitis B:",
    answers: [
      { text: "more than 200 mmol / l", correct: true },
      { text: "up to 20.5 mmol / l", correct: false },
      { text: "up to 85 mmol / l", correct: false },
      { text: "from 85 to 200 mmol / l", correct: false },
      { text: "all answers are correct", correct: false },
    ],
  },
  {
    question: "Choose the research method used to confirm the diagnosis in HDV:",
    answers: [
      { text: "ELISA (enzyme immunoassay)", correct: true },
      { text: "ultrasound of the liver", correct: false },
      { text: "liver biopsy", correct: false },
      { text: "scintigram of the liver", correct: false },
      { text: "biochemical blood test (bilirubin, ALT, AST)", correct: false },
    ],
  },
  {
    question: "Choose the methods for Prophylaxis of delta infection",
    answers: [
      { text: "vaccination against hepatitis B", correct: true },
      { text: "the use of thermally processed food", correct: false },
      { text: "vaccination against hepatitis A", correct: false },
      { text: "vaccination against measles", correct: false },
      { text: "interferon therapy", correct: false },
    ],
  },
  {
    question: "Explain the term \"co-infection\" in case  of viral hepatitis refers to a combination:",
    answers: [
      { text: "consecutive infection with two or more pathogens", correct: true },
      { text: "infection with chronic hepatitis", correct: false },
      { text: "infection against the background of virus carrying", correct: false },
      { text: "simultaneous infection with two or more pathogens", correct: false },
      { text: "there is no correct answer", correct: false },
    ],
  },
  {
    question: "Choose the prophylaxis of Delta infection involves:",
    answers: [
      { text: "vaccination against hepatitis B", correct: true },
      { text: "the use of thermally processed food", correct: false },
      { text: "vaccination against hepatitis A", correct: false },
      { text: "vaccination against measles", correct: false },
      { text: "interferon therapy", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a symptom of hepatodystrophy?",
    answers: [
      { text: "Elevated blood glucose levels", correct: true },
      { text: "Abdominal pain", correct: false },
      { text: "Nausea and vomiting", correct: false },
      { text: "Jaundice", correct: false },
      { text: "Asthenia", correct: false },
    ],
  },
  {
    question: "Describe which of the following conditions is associated with an unconjugated hyperbilirubinaemia",
    answers: [
      { text: "Haemolysis", correct: true },
      { text: "Rotor syndrome", correct: false },
      { text: "Dubin Johnson syndrome", correct: false },
      { text: "Pancreatic cancer", correct: false },
      { text: "Ascending cholangitis", correct: false },
    ],
  },
  {
    question: "Select which of the following viral markers signifies the ongoing viral replication in the case of Hepatitis-B?",
    answers: [
      { text: "HBe Ag", correct: true },
      { text: "Anti-HBs", correct: false },
      { text: "Anti-HBc", correct: false },
      { text: "HBs Ag", correct: false },
      { text: "anti HbeAg", correct: false },
    ],
  },
  {
    question: "Explain in which hepatitis autoimmune process develops?",
    answers: [
      { text: "Hepatitis B", correct: true },
      { text: "Hepatitis A", correct: false },
      { text: "Hepatitis E", correct: false },
      { text: "EBV", correct: false },
      { text: "Salmonellosis", correct: false },
    ],
  },
  {
    question: "Indicate the drug of choice for treatment of chronic HBV?",
    answers: [
      { text: "Lamivudine", correct: true },
      { text: "Oseltamivire", correct: false },
      { text: "Amantadine", correct: false },
      { text: "Acyclovir", correct: false },
      { text: "Zidovudine", correct: false },
    ],
  },
  {
    question: "Select which one of the following drugs leads to resistance in HBV more often?",
    answers: [
      { text: "Lamivudine", correct: true },
      { text: "Entecavir", correct: false },
      { text: "Tenofovir", correct: false },
      { text: "Interferone", correct: false },
      { text: "Aciclovir", correct: false },
    ],
  },
  {
    question: "Select which viral hepatitis is often accompanied by chronicity with the outcome of cirrhosis due to the high incidence of asymptomatic forms?",
    answers: [
      { text: "Viral hepatitis C", correct: true },
      { text: "Viral hepatitis A", correct: false },
      { text: "Viral hepatitis B", correct: false },
      { text: "Viral hepatitis D", correct: false },
      { text: "CMV hepatitis", correct: false },
    ],
  },
  {
    question: "Name the specific methods of diagnosis in viral hepatitis C:",
    answers: [
      { text: "determination of anti-HCV IgM", correct: true },
      { text: "determination of the activity of ALT, AST", correct: false },
      { text: "determination of prothrombin index", correct: false },
      { text: "determination of the total bilirubin level", correct: false },
      { text: "determination of liver enzyme activity", correct: false },
    ],
  },
  {
    question: "Choose the most frequent variants of the preicteric period in viral hepatitis B for kids :",
    answers: [
      { text: "dyspeptic", correct: true },
      { text: "arthralgic", correct: false },
      { text: "catarrhal", correct: false },
      { text: "latent", correct: false },
      { text: "fulminant", correct: false },
    ],
  },
  {
    question: "Choose the group which is not at risk for contracting hepatitis B virus?",
    answers: [
      { text: "Teachers", correct: true },
      { text: "Healthcare workers", correct: false },
      { text: "Drug addicts", correct: false },
      { text: "Children  who was borne from HbsAg+ mothers", correct: false },
      { text: "Homosexuals", correct: false },
    ],
  },
  {
    question: "Choose how many days is incubation period in Influenza?",
    answers: [
      { text: "1-2 days", correct: true },
      { text: "1-7 days", correct: false },
      { text: "7-10 days", correct: false },
      { text: "10-14 days", correct: false },
      { text: "21 day", correct: false },
    ],
  },
  {
    question: "Describe a common complication in Influenza :",
    answers: [
      { text: "pneumonia", correct: true },
      { text: "glomerulonephritis", correct: false },
      { text: "iridocyclitis", correct: false },
      { text: "pancreatitis", correct: false },
      { text: "gastritis", correct: false },
    ],
  },
  {
    question: "Choose the symptoms of catarrhal syndrome in parainfluenza :",
    answers: [
      { text: "pharyngitis, laryngitis, tracheitis", correct: true },
      { text: "bronchiolitis", correct: false },
      { text: "bronchitis", correct: false },
      { text: "alveolitis", correct: false },
      { text: "pneumonia", correct: false },
    ],
  },
  {
    question: "Specify the mechanism of transmission in Parainfluenza:",
    answers: [
      { text: "airborne", correct: true },
      { text: "fecal-oral", correct: false },
      { text: "parenteral", correct: false },
      { text: "contact", correct: false },
      { text: "water-borne", correct: false },
    ],
  },
  {
    question: "Specify the difference between parainfluenza and respiratory syncytial infection :",
    answers: [
      { text: "hoarseness of the voice in Parainfluenza", correct: true },
      { text: "moderate manifestations of intoxication in RSV", correct: false },
      { text: "catarrhal syndrome ", correct: false },
      { text: "non productive cough", correct: false },
      { text: "low grade fever", correct: false },
    ],
  },
  {
    question: "Determine whether Parainfluenza belongs to the following groups?",
    answers: [
      { text: " anthroponosis", correct: true },
      { text: "optional zoonosis", correct: false },
      { text: "sapronoses", correct: false },
      { text: "zoonosis", correct: false },
      { text: "zoonosis obligate", correct: false },
    ],
  },
  {
    question: "Patient 12 years old is sick with fever till 38 °C which proceeds 5 days. He has moderate dry cough, common cold, badly opens eyes. On examination: edema on face, expressed pus conjunctivitis. Mucous of pharynx is hyperemic, tonsils are enlarged. Internal organs are without pathology. Which disease is described?",
    answers: [
      { text: "Adenovirusl infection", correct: true },
      { text: "Bronchitis", correct: false },
      { text: "RSV", correct: false },
      { text: "Flu", correct: false },
      { text: "Parainluenza", correct: false },
    ],
  },
  {
    question: "13 years old kid, complaints about temperature 39.3°C, headache in the frontal area, pain in the eyeballs, photophobia, pain in muscles, dry cough. Became ill suddenly one day before. The condition is severe. Hyperemia of the face, eyes are watery, injection of sclera. Name this disease.",
    answers: [
      { text: "Influenza", correct: true },
      { text: "Bronchities", correct: false },
      { text: "Q-fever", correct: false },
      { text: "Parainluenza", correct: false },
      { text: "Adenovirusl infection", correct: false },
    ],
  },
  {
    question: "Choose the complications which is more common for Adenovirus infection?",
    answers: [
      { text: "Hepatitis, Pneumonia, Mesadenitis", correct: true },
      { text: "Pneumonia, Neurotoxicosis, hemorrage", correct: false },
      { text: "Laryngotracheitis, bronchitis, pneumonia", correct: false },
      { text: "Otitis media, Bronchitis, Pneumonia", correct: false },
      { text: "Bronchiolitis, RDS", correct: false },
    ],
  },
  {
    question: "Choose which of the following symptoms are not associated with adenoviruses?",
    answers: [
      { text: "hemorragic rash", correct: true },
      { text: "acute febrile pharyngitis", correct: false },
      { text: "epidemic keratoconjuctivits", correct: false },
      { text: "gastroenteritis", correct: false },
      { text: "hemorrogic cystitis", correct: false },
    ],
  },
  {
    question: "Choose which complications are more common for RSV?",
    answers: [
      { text: "Bronchiolitis, ARDS", correct: true },
      { text: "Pneumonia, Neurotoxicosis, hemorrage", correct: false },
      { text: "Hepatitis, Pneumonia, Mesadenitis", correct: false },
      { text: "Laryngotracheitis, bronchitis, pneumonia", correct: false },
      { text: "Otitis media, Bronchitis, Pneumonia", correct: false },
    ],
  },
  {
    question: "Select the severe lower respiratory tract illness is seen in RSV as:",
    answers: [
      { text: "Bronchiolitis, pneumonia", correct: true },
      { text: "Pneumonia, cerebral edema", correct: false },
      { text: "Bronchiolitis, back pain", correct: false },
      { text: "Asthma and pneumonia", correct: false },
      { text: "Atypical pneumonia", correct: false },
    ],
  },
  {
    question: "Choose how many days is incubation period in Adenovirus infection?",
    answers: [
      { text: "4-5 days, max 2 weeks", correct: true },
      { text: "26 days", correct: false },
      { text: "18 days", correct: false },
      { text: "1-7 days", correct: false },
      { text: "30 days", correct: false },
    ],
  },
  {
    question: "Which one of the following virus causes hemorrhagic cystitis, diarrhea and conjunctivitis:",
    answers: [
      { text: "Adenovirus", correct: true },
      { text: "Rotavirus", correct: false },
      { text: "RSV", correct: false },
      { text: "Rhinovirus", correct: false },
      { text: "Poliovirus", correct: false },
    ],
  },
  {
    question: "Describe the adenovirus infection is:",
    answers: [
      { text: "anthroponosis", correct: true },
      { text: "optional zoonosis", correct: false },
      { text: "sapronosis", correct: false },
      { text: "zoonosis obligate", correct: false },
      { text: "vector-borne disease", correct: false },
    ],
  },
  {
    question: "Specify the method of diagnosis in adenovirus infection:",
    answers: [
      { text: "immunofluorescence method", correct: true },
      { text: "latex agglutination reaction", correct: false },
      { text: "bacterialogical method", correct: false },
      { text: "the inhibition reaction of passive hemagglutination", correct: false },
      { text: "bacterioscopic method", correct: false },
    ],
  },
  {
    question: "Describe the predominant enlargement of lymph nodes in adenovirus infection:",
    answers: [
      { text: "cervical", correct: true },
      { text: "behind the ear", correct: false },
      { text: "inguinal", correct: false },
      { text: "occipital", correct: false },
      { text: "axillary", correct: false },
    ],
  },
  {
    question: "Describe the system of predominant lesion in adenovirus infection :",
    answers: [
      { text: "respiratory tract", correct: true },
      { text: "cardiovascular system", correct: false },
      { text: "urinary system", correct: false },
      { text: "the central nervous system", correct: false },
      { text: "reticulo-endothelial system", correct: false },
    ],
  },
  {
    question: "The child is 6 years old , there is redness and pus discharge from the eyes , fever , sore throat.  A preliminary diagnosis of adenovirus infection was made. Prescribe the treatment .",
    answers: [
      { text: "Symptomatic treatment", correct: true },
      { text: "Antiviral medication", correct: false },
      { text: "Antibiotics", correct: false },
      { text: "Interferons", correct: false },
      { text: "Hormones", correct: false },
    ],
  },
  {
    question: "The child is 6 years old , there is redness and discharge from the eyes , fever , sore throat .A preliminary diagnosis of adenovirus infection was made. Assign a confirmatory analysis:",
    answers: [
      { text: "PCR", correct: true },
      { text: "urine test", correct: false },
      { text: "blood test", correct: false },
      { text: "liver function test", correct: false },
      { text: "ultrasound", correct: false },
    ],
  },
  {
    question: "A patient 14years old,  objective examination: minor palatal hyperemia and tonsillitis, pus conjunctivitis of both eyes. During palpation not painful enlarged inframaxillary lymph nodes, and enlarged neck lymph  nodes were found. Liver and spleen moderately increased in size. Choose the most likely diagnosis? ",
    answers: [
      { text: "Adenovirus infection", correct: true },
      { text: "Diphtheria", correct: false },
      { text: "Meningococcal nasopharyngitis", correct: false },
      { text: "Influenza", correct: false },
      { text: "Infectious mononucleosis", correct: false },
    ],
  },
  {
    question: "Choose which complications more common for Influenza?",
    answers: [
      { text: "Pneumonia, Neurotoxicosis, hemorrage", correct: true },
      { text: "Hepatitis, Pneumonia, Mesadenitis", correct: false },
      { text: "Laryngotracheitis, bronchitis, pneumonia", correct: false },
      { text: "Otitis media, Bronchitis, Pneumonia", correct: false },
      { text: "Bronchiolitis, RDS", correct: false },
    ],
  },
  {
    question: "Choose the most common etiological agent for acute bronchiolitis ?",
    answers: [
      { text: "RSV", correct: true },
      { text: "Influenza virus", correct: false },
      { text: "Parainfluenza", correct: false },
      { text: "Rhinovirus", correct: false },
      { text: "Enterovirus", correct: false },
    ],
  },
  {
    question: "Select which virus cause hemorrhagic cystitis, diarrhea, conjunctivitis:",
    answers: [
      { text: "Adenovirus", correct: true },
      { text: "Rotavirus", correct: false },
      { text: "Herpes virus", correct: false },
      { text: "HIV", correct: false },
      { text: "RSV", correct: false },
    ],
  },
  {
    question: "A child of 8 years old has a fever of more than 5 days , headaches , lack of appetite , cough , shortness of breath . There was contact with a patient with the flu .A preliminary diagnosis of pneumonia was made .Schedule an examination .",
    answers: [
      { text: "Chest X-ray", correct: true },
      { text: "Ultrasound of the liver", correct: false },
      { text: "Ultrasound of the lungs", correct: false },
      { text: "CT scan ", correct: false },
      { text: "MRI", correct: false },
    ],
  },
  {
    question: "A child of 8 years old has a fever of more than 5 days , headaches , lack of appetite , cough , shortness of breath . There was contact with a patient with the flu .A preliminary diagnosis of pneumonia was made .Schedule the laboratory examination.",
    answers: [
      { text: "CBC", correct: true },
      { text: "urine test", correct: false },
      { text: "liver function test", correct: false },
      { text: "kidney function test", correct: false },
      { text: "Chest X-ray", correct: false },
    ],
  },
  {
    question: "Choose the leading syndrome for rhinovirus infection?",
    answers: [
      { text: "Rhinorrhea", correct: true },
      { text: "Intoxication", correct: false },
      { text: "Lymphadenopathy", correct: false },
      { text: "Hepatosplenomegaly", correct: false },
      { text: " Encephalopathy", correct: false },
    ],
  },
  {
    question: "Select drug neurominidase blockers?",
    answers: [
      { text: "Oseltamivir", correct: true },
      { text: "Ribavirin", correct: false },
      { text: "Remantadine", correct: false },
      { text: "Acyclovir", correct: false },
      { text: "Tenofovir", correct: false },
    ],
  },
  {
    question: "Explain where the entry gate for the influenza virus is?",
    answers: [
      { text: "The mucos membrane of the upper respiratory tract", correct: true },
      { text: "Mucos membranes of the gastrointestinal tract", correct: false },
      { text: "Mucos membranes of the genitourinary system", correct: false },
      { text: "Conjunctiva of the eyes", correct: false },
      { text: "Lymph system", correct: false },
    ],
  },
  {
    question: "The child is 6 years old , there are headaches , fever , sore throat , runny nose .A preliminary diagnosis of influenza was made .Prescribe treatment.",
    answers: [
      { text: "Antiviral medication", correct: true },
      { text: "Antibiotics", correct: false },
      { text: "Hormones", correct: false },
      { text: "Intravenous solutions", correct: false },
      { text: "Vitamins", correct: false },
    ],
  },
  {
    question: "Describe three stages of the pathogenesis in scarlet fever:",
    answers: [
      { text: "It is septic stage, toxic stage and allergic stage", correct: true },
      { text: "It is toxic stage, cataral stage, coma", correct: false },
      { text: "It is allergic stage, coma, recovery stage", correct: false },
      { text: "It is allergic stage, coma, recovery stage", correct: false },
      { text: "It is toxic stage, allergic stage, complication stage", correct: false },
    ],
  },
  {
    question: "Describe atypical forms of scarlet fever:",
    answers: [
      { text: "Extrabuccal scarlet fever", correct: true },
      { text: "Septic scarlet fever", correct: false },
      { text: "Mild scarlet fever", correct: false },
      { text: "Moderate scarlet fever", correct: false },
      { text: "Hypertoxic scarlet fever", correct: false },
    ],
  },
  {
    question: "Mark how many days is incubation period in scarlet fever?",
    answers: [
      { text: "2-5(7) days", correct: true },
      { text: "7-10 days", correct: false },
      { text: "10-14 days", correct: false },
      { text: "14-21 day", correct: false },
      { text: "21-30 days", correct: false },
    ],
  },
  {
    question: "Identify the specific symptoms of scarlet fever?",
    answers: [
      { text: "Strawberry tongue, punctured rash, tonsilitis", correct: true },
      { text: "Abdominal pain, diarrhea", correct: false },
      { text: "Lymphadenopathy, keratoconjunltivitis, tonsilitis", correct: false },
      { text: "Scleritis, rare dry cough, high fever", correct: false },
      { text: "Barking cough, dyspnea, mild fever", correct: false },
    ],
  },
  {
    question: "Choose the toxic complication of scarlet fever?",
    answers: [
      { text: "Toxic myocarditis", correct: true },
      { text: "Lymphadenitis", correct: false },
      { text: "Glomerulonephritis", correct: false },
      { text: "Arthritis", correct: false },
      { text: "Meningo-encephalitis", correct: false },
    ],
  },
  {
    question: "Describe the rash in scarlet fever:",
    answers: [
      { text: "Red punctured maculopapular rash \"Sand paper like\"", correct: true },
      { text: "Vesicular all over the body, itchy", correct: false },
      { text: "Papular, mainly localized in sholders", correct: false },
      { text: "Maculopapular rash localized on the face and trunk", correct: false },
      { text: "Rose spots on the chest and back", correct: false },
    ],
  },
  {
    question: "Choose how many days the patient with scarlet fever is contagious?",
    answers: [
      { text: "22 days", correct: true },
      { text: "7 days", correct: false },
      { text: "10 days", correct: false },
      { text: "14 days", correct: false },
      { text: "30 days", correct: false },
    ],
  },
  {
    question: "What transmission way is common for measles?",
    answers: [
      { text: "Droplet", correct: true },
      { text: "Feco-oral", correct: false },
      { text: "Sexual", correct: false },
      { text: "Intravenous", correct: false },
      { text: "Vecror-borne", correct: false },
    ],
  },
  {
    question: "Select the organs which are not damaged in measles?",
    answers: [
      { text: "Liver and spleen", correct: true },
      { text: "Conjunctivae", correct: false },
      { text: "Respiratory tract", correct: false },
      { text: "CNS", correct: false },
      { text: "Skin", correct: false },
    ],
  },
  {
    question: "Name the condition develops after measles?",
    answers: [
      { text: "Anergy", correct: true },
      { text: "Allergy", correct: false },
      { text: "Atrophy", correct: false },
      { text: "Hypotrothy", correct: false },
      { text: "Areflexia", correct: false },
    ],
  },
  {
    question: "15-year-old male presents with maculo-pappular rash rash, swollen lymph nodes, and joint pain. He mentions that his classmates have also been experiencing similar symptoms. What is the most appropriate next step in managing this situation?",
    answers: [
      { text: "Administer the MMR vaccine in 72h", correct: true },
      { text: "Administer antibiotics", correct: false },
      { text: "Isolate the patient", correct: false },
      { text: "Perform a throat swab for culture", correct: false },
      { text: "Prescribe the Interferon therapy", correct: false },
    ],
  },
  {
    question: "10 years old boy has a mild fever with pharyngitis. On the face and trunk, small macular rashes are visible, on soft palatine-pink and red spots. Retro auricular and post occipital lymph nodes are swollen and palpable. On CBC Turk’s cells found. Conclude the diagnosis?",
    answers: [
      { text: "Rubella", correct: true },
      { text: "Measles", correct: false },
      { text: "Parvovirus infection", correct: false },
      { text: "Shingles", correct: false },
      { text: "Scarlet fever", correct: false },
    ],
  },
  {
    question: "Identify a symptom characteristic of measles that disappears when the rash appears",
    answers: [
      { text: "Koplik’s spots", correct: true },
      { text: " Intoxication", correct: false },
      { text: " Rhinorrhea", correct: false },
      { text: "Conjunctivitis", correct: false },
      { text: " Photophobia", correct: false },
    ],
  },
  {
    question: "Infer one of the followings which is symptom of congenital rubella?",
    answers: [
      { text: "Deafness", correct: true },
      { text: "Strawberry tongue", correct: false },
      { text: "Koplik’s spot", correct: false },
      { text: "Forchheimer’s spots", correct: false },
      { text: "Paralysis", correct: false },
    ],
  },
  {
    question: "Associate about measles rash appearance?",
    answers: [
      { text: "1-2 days after Koplik's spots", correct: true },
      { text: "Along with Koplik's spots", correct: false },
      { text: "1-2 days before Koplik's spots", correct: false },
      { text: "Post measles stage", correct: false },
      { text: "No rash in measles", correct: false },
    ],
  },
  {
    question: "Explain, what is Pastia's sign in Scarlet fever?",
    answers: [
      { text: "Diffusion of rash in the skin folds", correct: true },
      { text: "Rash on the palms", correct: false },
      { text: "Rash sparing the face", correct: false },
      { text: "Rash following the lymphatic vessels", correct: false },
      { text: "Rash forming a \"bull's eye\" pattern", correct: false },
    ],
  },
  {
    question: "Which antibiotic is commonly used for treating scarlet fever",
    answers: [
      { text: "Penicillin", correct: true },
      { text: "Ciprofloxacin", correct: false },
      { text: "Azytromycin", correct: false },
      { text: "Amoxiclav", correct: false },
      { text: "Tetracycline", correct: false },
    ],
  },
  {
    question: "Select an age group is most at risk for severe complications from Measles?",
    answers: [
      { text: "Infants and young children", correct: true },
      { text: "Eldery patients", correct: false },
      { text: "Toddlers", correct: false },
      { text: "Adults", correct: false },
      { text: "Organ-transplantant patients", correct: false },
    ],
  },
  {
    question: "Which population is more susceptible to Pseudo-TB?",
    answers: [
      { text: "Immunocompromised individuals", correct: true },
      { text: " Healthy young adults", correct: false },
      { text: "Elderly individuals", correct: false },
      { text: "Children", correct: false },
      { text: "Pregnant ladies", correct: false },
    ],
  },
  {
    question: "Separate, which of the following is NOT a common symptom of measles?",
    answers: [
      { text: "\"Sand paper like\" rash", correct: true },
      { text: "Koplik spots", correct: false },
      { text: "Maculo-papullar rash", correct: false },
      { text: "Cough, coryza", correct: false },
      { text: "Diarrhea", correct: false },
    ],
  },
  {
    question: "What is a common late complication associated with untreated Scarlet Fever?",
    answers: [
      { text: "Reumatic Fever", correct: true },
      { text: "Miocarditis", correct: false },
      { text: "Lymphadenopathy", correct: false },
      { text: "Enteritis", correct: false },
      { text: "Acute Renal failure", correct: false },
    ],
  },
  {
    question: "Outline the characteristic symptom of Measles that often precedes the rash?",
    answers: [
      { text: "cough, coryza, conjunctivitis", correct: true },
      { text: "high grade fever", correct: false },
      { text: "generalized lymphoadenopathy", correct: false },
      { text: "diarrea", correct: false },
      { text: "tonsillitis", correct: false },
    ],
  },
  {
    question: "Outline the primary cause of herpetic gingivostomatitis in children?",
    answers: [
      { text: "Virus", correct: true },
      { text: "Bacteria", correct: false },
      { text: "Fungus", correct: false },
      { text: "Protozoa", correct: false },
      { text: "Prion", correct: false },
    ],
  },
  {
    question: "Which herpes virus is commonly associated with causing chickenpox in children?",
    answers: [
      { text: "Varicella-zoster virus (VZV)", correct: true },
      { text: "Herpes simplex virus type 1 (HSV-1)", correct: false },
      { text: "Herpes simplex virus type 2 (HSV-2)", correct: false },
      { text: "Epstein-Barr virus (EBV)", correct: false },
      { text: "Cytomegalovirus (CMV)", correct: false },
    ],
  },
  {
    question: "Which of the following is a common mode of transmission for CMV infection in infants?",
    answers: [
      { text: "Vertical transmission from mother to fetus during pregnancy", correct: true },
      { text: "Ingestion of contaminated food or water", correct: false },
      { text: "Respiratory droplets from infected individuals", correct: false },
      { text: "Intramuscular", correct: false },
      { text: "Direct contact with infected skin lesions", correct: false },
    ],
  },
  {
    question: "Indentify the disease in which vesicles, bullas is seen  along the sensory nerves with acute pain including one dermatome?",
    answers: [
      { text: "Shingles", correct: true },
      { text: "Herpes simplex", correct: false },
      { text: "Chicken pox", correct: false },
      { text: "Neuritis", correct: false },
      { text: "Small pox", correct: false },
    ],
  },
  {
    question: "Which laboratory test is most useful for diagnosing congenital CMV infection in infants?",
    answers: [
      { text: "Serum polymerase chain reaction (PCR) for CMV DNA", correct: true },
      { text: "Complete blood count (CBC)", correct: false },
      { text: "Urinalysis", correct: false },
      { text: "Blood culture", correct: false },
      { text: "Liver function tests (LFTs)", correct: false },
    ],
  },
  {
    question: "Mark the site of infection in HSV-1?",
    answers: [
      { text: "Skin and mucos membranes of oral cavity", correct: true },
      { text: "Motor neurons", correct: false },
      { text: "Hairs and nails", correct: false },
      { text: "Mucous membranes and skin", correct: false },
      { text: "Kidney", correct: false },
    ],
  },
  {
    question: "Select the site of infection in HSV-2?",
    answers: [
      { text: "Skin and mucos membrane of genitals", correct: true },
      { text: "Skin all over the body", correct: false },
      { text: "Mucos membrane of eyes", correct: false },
      { text: "Mucos membrane of GIT", correct: false },
      { text: "Kidney", correct: false },
    ],
  },
  {
    question: "Mark how many days is incubation period in herpes simplex?",
    answers: [
      { text: "2-14 days (usually 4-5 days)", correct: true },
      { text: "7-10 days", correct: false },
      { text: "10-14 days", correct: false },
      { text: "14-21 daay", correct: false },
      { text: "30 days", correct: false },
    ],
  },
  {
    question: "A 6-year-old child presents to the pediatrician's office with a fever, sore throat, and painful ulcers in the oral cavity. The child's parents report that the symptoms started a few days ago and have been progressively worsening. Mark the disease?",
    answers: [
      { text: "Herpetic gingivostomatitis", correct: true },
      { text: "Hand, foot, and mouth disease", correct: false },
      { text: "Infectious mononucleosis", correct: false },
      { text: "Oral candidiasis", correct: false },
      { text: "Scarlet fever", correct: false },
    ],
  },
  {
    question: "Choose which organ is most commonly affected in infants with congenital CMV infection?",
    answers: [
      { text: "Brain", correct: true },
      { text: "Liver", correct: false },
      { text: "Lungs ", correct: false },
      { text: "Skin", correct: false },
      { text: "Kidneys", correct: false },
    ],
  },
  {
    question: "What is the recommended treatment for symptomatic congenital CMV infection in infants?",
    answers: [
      { text: "Supportive care only", correct: true },
      { text: "Acyclovir", correct: false },
      { text: "Ganciclovir", correct: false },
      { text: "Ribavirin", correct: false },
      { text: "Valganciclovir", correct: false },
    ],
  },
  {
    question: "A 7-year-old child complains of feeling unwell with a fever and develops a rash that starts on the face and spreads to the body. On examination, you notice vesicles on an erythematous base, rash is itchy. What is the likely diagnosis?",
    answers: [
      { text: "Varicella (Chickenpox)", correct: true },
      { text: "Mumps", correct: false },
      { text: "Impetigo", correct: false },
      { text: "Fifth disease (Erythema infectiosum)", correct: false },
      { text: "Roseola", correct: false },
    ],
  },
  {
    question: "A 5-year-old child presents with a fever, rash starting on the trunk, and itching. On examination, you notice fluid-filled blisters in different stages of healing. What is the most likely diagnosis?",
    answers: [
      { text: "Varicella (Chickenpox)", correct: true },
      { text: "Measles", correct: false },
      { text: "Rubella", correct: false },
      { text: "Hand foot mouth disease", correct: false },
      { text: "Scarlet fever", correct: false },
    ],
  },
  {
    question: "A 4-year-old child presents with fever and a rash consisting of small red spots that progress to fluid-filled blisters. The rash started on the trunk and spread to the face and extremities. What is the most likely diagnosis?",
    answers: [
      { text: "Varicella (Chickenpox)", correct: true },
      { text: "Measles", correct: false },
      { text: "Rubella", correct: false },
      { text: "Hand foot mouth disease", correct: false },
      { text: "Scarlet fever", correct: false },
    ],
  },
  {
    question: "A 8-year-old child is brought to the clinic with a rash that started on the trunk and spread to the extremities. On examination, you notice vesicles on an erythematous base. The child complains of itching. What is the most likely diagnosis?",
    answers: [
      { text: "Varicella-zoster virus infection", correct: true },
      { text: "Herpes Simplex Virus type 1 (HSV-1) infection", correct: false },
      { text: "Measles", correct: false },
      { text: "Rubella", correct: false },
      { text: "Hand foot mouth disease", correct: false },
    ],
  },
  {
    question: "A 3-month-old infant is brought to the pediatrician's office by her parents due to concerns about poor feeding, lethargy, and a persistent fever. The infant was born full-term via vaginal delivery and had an uneventful perinatal course. On physical examination, the infant appears pale and irritable. Hepatosplenomegaly is noted on abdominal palpation. What is the most likely diagnosis for this infant's condition based on the clinical presentation?",
    answers: [
      { text: "Cytomegalovirus (CMV) infection", correct: true },
      { text: "Varicella-zoster virus infection", correct: false },
      { text: "Herpes Simplex Virus type 1 (HSV-1) infection", correct: false },
      { text: "Measles", correct: false },
      { text: "Sepsis", correct: false },
    ],
  },
  {
    question: "Specify what are the differential diagnostic changes in the general blood test for infectious mononucleosis :",
    answers: [
      { text: "the presence of atypical mononuclears", correct: true },
      { text: "neutrophilosis", correct: false },
      { text: "neutropenia", correct: false },
      { text: "thrombocytopenia", correct: false },
      { text: "normal", correct: false },
    ],
  },
  {
    question: "Describe infectious mononucleosis differs from Bacterial tonsilitis by the presence of:",
    answers: [
      { text: "hepatosplenomegaly", correct: true },
      { text: "intoxication", correct: false },
      { text: "lymphadenopathy", correct: false },
      { text: "enlargement of tonsillitis", correct: false },
      { text: "conjunctivitis", correct: false },
    ],
  },
  {
    question: "Which of the following tests is commonly used to diagnose mononucleosis?",
    answers: [
      { text: "monospot test", correct: true },
      { text: "blood culture", correct: false },
      { text: "urine analysis", correct: false },
      { text: "X-ray imaging ", correct: false },
      { text: "sputum culture", correct: false },
    ],
  },
  {
    question: "Explain distinguishes of infectious mononucleosis from lymphogranulomatosis?",
    answers: [
      { text: "tonsillitis", correct: true },
      { text: "presence of fever", correct: false },
      { text: "splenomegaly", correct: false },
      { text: "lymphadenopathy", correct: false },
      { text: "conjunctivitis", correct: false },
    ],
  },
  {
    question: "Indicate the infectious mononucleosis:",
    answers: [
      { text: "anthroponosis", correct: true },
      { text: "zoonosis obligate", correct: false },
      { text: "optional zoonosis", correct: false },
      { text: "sapronosis", correct: false },
      { text: "vector-borne disease", correct: false },
    ],
  },
  {
    question: "Choose the target of  diphtheria toxin :",
    answers: [
      { text: " heart(miocardium)", correct: true },
      { text: "pancreas", correct: false },
      { text: "liver", correct: false },
      { text: "adrenal glands", correct: false },
      { text: "bronchioles", correct: false },
    ],
  },
  {
    question: "Choose the drug to suppress the causative agent of diphtheria :",
    answers: [
      { text: "penicillin, erytromycin", correct: true },
      { text: "trimethoprim with sulfamethoxazole", correct: false },
      { text: "sulfonamides", correct: false },
      { text: "nitroimidazoles", correct: false },
      { text: "antiviral drugs", correct: false },
    ],
  },
  {
    question: "Choose the main method for diagnosis in diphtheria :",
    answers: [
      { text: "bacteriological", correct: true },
      { text: "biological", correct: false },
      { text: "molecular genetic analysis", correct: false },
      { text: " bacterioscopic", correct: false },
      { text: "latex agglutination reaction", correct: false },
    ],
  },
  {
    question: "Select what can be found in peripheral blood during infectious mononucleosis:",
    answers: [
      { text: "atypical mononuclear cells", correct: true },
      { text: "leukocytosis", correct: false },
      { text: "neutrophilosis", correct: false },
      { text: "leukopenia", correct: false },
      { text: "eosinophilia", correct: false },
    ],
  },
  {
    question: "Select differential diagnostic changes in the general blood count in infectious mononucleosis",
    answers: [
      { text: "the presence of atypical mononuclear cells", correct: true },
      { text: " neutrophilosis", correct: false },
      { text: "neutropenia", correct: false },
      { text: "thrombocytopenia", correct: false },
      { text: "leukopenia", correct: false },
    ],
  },
  {
    question: "A 5-year-old unvaccinated child displays a sore throat and fever. Physical examination reveals a grayish membrane covering the tonsils. Choose the immediate management step:",
    answers: [
      { text: "Administer diphtheria antitoxin", correct: true },
      { text: "Perform a throat swab for culture and sensitivity", correct: false },
      { text: "Initiate broad-spectrum antibiotics", correct: false },
      { text: "Isolate the patient to prevent disease spread", correct: false },
      { text: "Administer diphtheria toxin", correct: false },
    ],
  },
  {
    question: "Explain which part of the body is affected in cutaneous diphtheria?",
    answers: [
      { text: "skin ", correct: true },
      { text: "eyes", correct: false },
      { text: "tonsils", correct: false },
      { text: "genitalia", correct: false },
      { text: "laryngs", correct: false },
    ],
  },
  {
    question: "Interfere is the main characteristic feature of diphtheria toxin?",
    answers: [
      { text: "Inhibition of protein synthesis", correct: true },
      { text: "Decreasing level of trombocytes", correct: false },
      { text: "Enterotoxin production", correct: false },
      { text: "Superantigen activity", correct: false },
      { text: "Hemolysis", correct: false },
    ],
  },
  {
    question: "Choose  the primary treatment for diphtheria?",
    answers: [
      { text: "Antitoxic serum, antibiotics", correct: true },
      { text: "Vaccine", correct: false },
      { text: "Human immunoglobuline", correct: false },
      { text: "Corticosteroids", correct: false },
      { text: "Anticoagulants", correct: false },
    ],
  },
  {
    question: "Describe the key feature of the pseudomembrane seen in diphtheria?",
    answers: [
      { text: "It consists of dead tissue, bacteria, and inflammatory cells, difficult to remove", correct: true },
      { text: "It is painless", correct: false },
      { text: "It is easily removed", correct: false },
      { text: "It only forms in the throat", correct: false },
      { text: "It is a fungal growth", correct: false },
    ],
  },
  {
    question: "Choose which of the following complications can arise from untreated diphtheria?",
    answers: [
      { text: "Myocarditis", correct: true },
      { text: "Encephalitis", correct: false },
      { text: "Pneumonia", correct: false },
      { text: "Gastritis", correct: false },
      { text: "Osteomyelitis", correct: false },
    ],
  },
  {
    question: "Specify the typical signs of mumps:",
    answers: [
      { text: "unilateral lesion of the parotid salivary gland is often noted", correct: true },
      { text: "gradual start", correct: false },
      { text: "in all cases, there is a symmetrical lesion of the salivary glands", correct: false },
      { text: "hyperemia of the skin in the area of the affected gland", correct: false },
      { text: "hyperemia of the skin of face ", correct: false },
    ],
  },
  {
    question: "Choose the age when orchitis in Mumps develops more often:",
    answers: [
      { text: "For children 12 years and older", correct: true },
      { text: "For children under 10 years of age", correct: false },
      { text: "Men over 30 years of age", correct: false },
      { text: "Children have 1 year of life", correct: false },
      { text: "For children 3years and older", correct: false },
    ],
  },
  {
    question: "Indicate the first signs of mumps:",
    answers: [
      { text: "Pain in the parotid salivary gland", correct: true },
      { text: "Pain in the temporomandibular joint", correct: false },
      { text: "Dry mouth", correct: false },
      { text: "Decreased appetite", correct: false },
      { text: "High fever", correct: false },
    ],
  },
  {
    question: "Choose the causative agent of mumps belongs to ?",
    answers: [
      { text: "Paramyxo virus", correct: true },
      { text: "Morbilli virus", correct: false },
      { text: "Poliovirus hominis", correct: false },
      { text: "Varicella zooster virus", correct: false },
      { text: "Orthomyxoviridae", correct: false },
    ],
  },
  {
    question: "Choose the treatment is used for Mumps?",
    answers: [
      { text: "The symptomatic", correct: true },
      { text: "The surgical", correct: false },
      { text: "It is not used", correct: false },
      { text: "Hemodialysis", correct: false },
      { text: "Antiviral drugs", correct: false },
    ],
  },
  {
    question: "Choose the vaccine protects from the mumps?",
    answers: [
      { text: "MMR", correct: true },
      { text: "DTP", correct: false },
      { text: "There is no vaccine", correct: false },
      { text: "OPV", correct: false },
      { text: "BCG", correct: false },
    ],
  },
  {
    question: "Explain what organs are infected at the mumps?",
    answers: [
      { text: "Salivary glands", correct: true },
      { text: "Bronchial glands", correct: false },
      { text: "Thyroid gland", correct: false },
      { text: "Adrenal glands", correct: false },
      { text: "Cervical lymph nodes", correct: false },
    ],
  },
  {
    question: "Explain what immunity is developed at mumps?",
    answers: [
      { text: "The life time", correct: true },
      { text: "1-2 years", correct: false },
      { text: "Is typespecific and not prolonged", correct: false },
      { text: "10 years", correct: false },
      { text: "Immuity is not pronounced", correct: false },
    ],
  },
  {
    question: "A 4-year-old child has an increase in body temperature, weakness, and headaches. Upon examination , there is hyperemia of the pharynx, enlarged tonsils , covered with purulent plaque. A preliminary diagnosis of tonsillitis has been made. Name which diagnosis should be differentiated from:",
    answers: [
      { text: "diphtheria", correct: true },
      { text: "infection mononucleosis", correct: false },
      { text: "flu", correct: false },
      { text: "parainluenza", correct: false },
      { text: "mumps", correct: false },
    ],
  },
  {
    question: "A 8-month-old infant is seen in the emergency room due to fever and swelling near the jawline. The parents describe the baby having difficulty swallowing and crying more than usual. No recent travel or sick contacts are reported. MMR vaccine is not performed. Name the condition.",
    answers: [
      { text: "Mumps", correct: true },
      { text: "Cytomegalovirus (CMV)", correct: false },
      { text: "Hand Food Mouth Disease", correct: false },
      { text: "Acute streptococcal tonsillitis", correct: false },
      { text: "Measles", correct: false },
    ],
  },
  {
    question: "A 10-year-old child comes to the clinic with fever, sore throat, and swelling in front of both ears. The patient's parents mention that the child has not been vaccinated with MMR. Explain what is the most likely cause of these symptoms.",
    answers: [
      { text: "Mumps", correct: true },
      { text: "Streptococcal infection", correct: false },
      { text: "Anenoviral infection ", correct: false },
      { text: "Diphteria", correct: false },
      { text: "EBV", correct: false },
    ],
  },
  {
    question: "A 6-month-old baby is brought to the pediatrician with a history of fever and swelling in the jaw area. The parents mention that the baby seems uncomfortable while sucking on a pacifier, and there's an increase in drooling. MMR vaccine is not provided. Name the more likely diagnosis.",
    answers: [
      { text: "Mumps", correct: true },
      { text: "Hand Foot Mouth Disease", correct: false },
      { text: "Diphteria", correct: false },
      { text: "Sialoadenitis", correct: false },
      { text: "Lymphangitis", correct: false },
    ],
  },
  {
    question: "A 6-month-old infant is brought to the clinic with swelling and tenderness in the parotid glands. The parents report that the child has been irritable and has had a fever for the past few days. What is the most likely diagnosis?",
    answers: [
      { text: "Mumps", correct: true },
      { text: "Diphtheria of the respiratory tract", correct: false },
      { text: "Sialoadenitis", correct: false },
      { text: "Tuberculosis of lymphnodes", correct: false },
      { text: "Chickenpox", correct: false },
    ],
  },
  {
    question: "A 6-month-old infant has a persistent cough, low-grade fever, and respiratory distress. The parents mention exposure to a family member with a chronic cough. Choose the diagnosis.",
    answers: [
      { text: "Pertussis ", correct: true },
      { text: "Tuberculosis ", correct: false },
      { text: "Pseudotuberculosis", correct: false },
      { text: "Pneumonia", correct: false },
      { text: "Bronchitis", correct: false },
    ],
  },
  {
    question: "A 5-month-old kid  is brought  in Polyclinic  with coughing fits, especially at night, and a runny nose. Parents note that the cough is worse when the baby is feeding. Mark the condition.",
    answers: [
      { text: "Pertussis ", correct: true },
      { text: "Bronchiolitis", correct: false },
      { text: "Asthma and pneumonia", correct: false },
      { text: "croup syndrome", correct: false },
      { text: "RSV", correct: false },
    ],
  },
  {
    question: "A 5-month-old baby presents with paroxysmal coughing fits, post-tussive vomiting, and a whooping sound. No significant fever is noted. Choose the disease?",
    answers: [
      { text: "Pertussis ", correct: true },
      { text: "Respiratory syncytial virus (RSV) infection", correct: false },
      { text: "Asthma and pneumonia", correct: false },
      { text: "Croup syndrome", correct: false },
      { text: "Pseudotuberculosis", correct: false },
    ],
  },
  {
    question: "Select  the group of meningococcal disease?",
    answers: [
      { text: "anthroponosis", correct: true },
      { text: "sapronosis", correct: false },
      { text: "zoonosis obligate", correct: false },
      { text: "facultative zoonosis", correct: false },
      { text: "vector- borne disease", correct: false },
    ],
  },
  {
    question: "Select the mechanism of transmission in Meningococcal infection:",
    answers: [
      { text: "air-droplet", correct: true },
      { text: "fecal-oral", correct: false },
      { text: "contact", correct: false },
      { text: "sexual way", correct: false },
      { text: "parenteral ", correct: false },
    ],
  },
  {
    question: "Describe the first elements of a meningococcal rash that appear mainly on:",
    answers: [
      { text: " the feet and the lower third of the shins", correct: true },
      { text: "flexor surfaces of the upper extremities", correct: false },
      { text: "the lateral surfaces of the trunk", correct: false },
      { text: "the face and scalp", correct: false },
      { text: "the face and hand", correct: false },
    ],
  },
  {
    question: "Choose the generalized forms of meningococcal infection?",
    answers: [
      { text: "meningococcemia", correct: true },
      { text: "acute nasopharyngitis", correct: false },
      { text: "pneumonia", correct: false },
      { text: "acute nasopharyngitis", correct: false },
      { text: "endocarditis", correct: false },
    ],
  },
  {
    question: "Choose the primary localized forms of meningococcal infection :",
    answers: [
      { text: "acute nasopharyngitis", correct: true },
      { text: "meningococcemia", correct: false },
      { text: "meningitis", correct: false },
      { text: "endocarditis", correct: false },
      { text: "meningoencephalitis", correct: false },
    ],
  },
  {
    question: "Describe the duration of antibacterial therapy for meningococcemia on average:",
    answers: [
      { text: "7-10 days", correct: true },
      { text: "1-5 days", correct: false },
      { text: "10-14 daya", correct: false },
      { text: "15-20 days", correct: false },
      { text: "30 days", correct: false },
    ],
  },
  {
    question: "Describe the nature of the rash elements in meningococcemia:",
    answers: [
      { text: "\"stellate\"  hemorragic rash with foci of necrosis in the center", correct: true },
      { text: "maculo-papullar rash", correct: false },
      { text: "urticaria", correct: false },
      { text: "small-point type of \"hood\", \"gloves\", \"socks", correct: false },
      { text: "roseola", correct: false },
    ],
  },
  {
    question: "Name the biological material for bacterioscopic examination which should be taken from patients with meningococcemia?",
    answers: [
      { text: "blood", correct: true },
      { text: "saliva", correct: false },
      { text: "feces", correct: false },
      { text: "urine", correct: false },
      { text: "bile", correct: false },
    ],
  },
  {
    question: "Explain how many days patient with poliomyelitis can excrete the virus?",
    answers: [
      { text: "up to 30 days (in rare cases up to 2 month)", correct: true },
      { text: "1 week", correct: false },
      { text: "10 days", correct: false },
      { text: "2 weeks ", correct: false },
      { text: "6 month", correct: false },
    ],
  },
  {
    question: "A 5-year-old girl fell ill acutely: body temperature – 39.0°C, repeated vomiting, headache, dizziness, hyperesthesia, hyperacusis.The condition is serious, drowsy, lying on her side with her head thrown back. There is a mild maculopapular rash on the skin of the face, neck and upper body. On the soft palate and base of the uvula there are erythematous papules. Rigidity of the neck muscles, positive Kerning's symptom, lower Brudzinski's sign. Infer preliminary diagnosis.",
    answers: [
      { text: "enterovirus infection", correct: true },
      { text: "meningococcemia, meningitis", correct: false },
      { text: "pneumonia", correct: false },
      { text: "flu", correct: false },
      { text: "measles", correct: false },
    ],
  },
  {
    question: "A 6-month-old child fell ill acutely with increasing body temperature to  39.90 C, restless, does not take breast, throws his head back. The skin is clean, pale with a marble tint. The fontanel is bulging, tense. Lesage's sign is positive .Name more likely disease?",
    answers: [
      { text: "meningitis", correct: true },
      { text: "cerebral edema", correct: false },
      { text: "encephalitis", correct: false },
      { text: "respiratory distress syndrome", correct: false },
      { text: "acute hepatic encephalopathy", correct: false },
    ],
  },
  {
    question: "Explane emergency care for generalized forms of meningococcal infection at the pre-hospital stage consists primarily of immediate intravenous administration of?",
    answers: [
      { text: "Glucocorticoids", correct: true },
      { text: "Antibiotics", correct: false },
      { text: "Antipyretics", correct: false },
      { text: "Anticoagulants", correct: false },
      { text: "Diuretics", correct: false },
    ],
  },
  {
    question: "Explane which syndromes are characteristic of meningitis in children of 1 year of life:",
    answers: [
      { text: "All of the above", correct: true },
      { text: "Intoxication", correct: false },
      { text: "Meningeal", correct: false },
      { text: "Convulsive", correct: false },
      { text: "Liquor-hypertensive", correct: false },
    ],
  },
  {
    question: "Outline how is it recommended to prescribe antibiotics for generalized meningococcal infection?",
    answers: [
      { text: "use average (for age) doses of antibiotics, taking into account permeability through the blood-brain barrier", correct: true },
      { text: "use maximum (for age) doses of antibiotics without taking into account permeability through the blood-brain barrier", correct: false },
      { text: "use low (for age) doses of antibiotics, taking into account permeability through the blood-brain barrier", correct: false },
      { text: "do not use antibacterial drugs", correct: false },
      { text: "use bacteriocidal antibiotics", correct: false },
    ],
  },
  {
    question: "Describe the cerebrospinal fluid in meningococcal meningitis:",
    answers: [
      { text: "whitish-yellow, cloudy", correct: true },
      { text: "pink, cloudy", correct: false },
      { text: "colorless, slightly opalescent", correct: false },
      { text: "colorless, transparent", correct: false },
      { text: "xanthochromic", correct: false },
    ],
  },
  {
    question: "Choose the primary localized forms of meningococcal infection include:",
    answers: [
      { text: "acute nasopharyngitis", correct: true },
      { text: "endocarditis", correct: false },
      { text: "meningitis", correct: false },
      { text: "meningococcemia", correct: false },
      { text: "arthritis", correct: false },
    ],
  },
]


const questionElement = document.getElementById('question'); 
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

backButton.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    handleBackButton();
  }
});

searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10);
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

startQuiz();
