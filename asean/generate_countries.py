#!/usr/bin/env python3
"""
Generate all 11 ASEAN country business guide pages for Dej-Udom & Associates website.
Run from the /asean/ directory or its parent.
"""

import os
import html

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))

COUNTRIES = [
    {
        "slug": "brunei",
        "name": "Brunei Darussalam",
        "flag": "&#x1F1E7;&#x1F1F3;",
        "capital": "Bandar Seri Begawan",
        "legal_system": "Common law and Sharia",
        "home": False,
        "overview": [
            "Brunei Darussalam is a small but wealthy nation located on the northern coast of the island of Borneo. With a population of approximately 450,000, the country is one of the wealthiest in Southeast Asia, driven primarily by its substantial oil and natural gas reserves. Brunei has been a member of ASEAN since its founding in 1984.",
            "The economy is heavily dependent on the hydrocarbon sector, which accounts for the majority of government revenues and export earnings. The government has pursued diversification through its Wawasan Brunei 2035 vision, seeking to develop sectors such as halal food manufacturing, tourism, and information technology.",
            "Brunei operates as an absolute monarchy under His Majesty the Sultan. The country offers political stability, zero personal income tax, and a strategic location within the Borneo Economic Corridor."
        ],
        "legal_framework": [
            "Brunei maintains a dual legal system comprising common law inherited from its British colonial period and Sharia law. The common law system governs commercial and civil matters, while Sharia law applies to personal status matters for Muslims and certain criminal offenses under the Syariah Penal Code Order 2013.",
            "The court system includes the Supreme Court (comprising the Court of Appeal and the High Court), Intermediate Courts, and Magistrates' Courts for civil and criminal matters. A separate Syariah Courts hierarchy handles Islamic law matters.",
            "Commercial legislation draws substantially from English law principles. Key statutes include the Companies Act, the Bankruptcy Act, and the Employment Order, all of which reflect common law traditions adapted to local requirements."
        ],
        "business_formation": [
            "Foreign investors may establish businesses in Brunei through several structures: private limited companies, sole proprietorships, partnerships, or branch offices of foreign companies. The most common vehicle for foreign investment is the private limited company incorporated under the Companies Act.",
            "Company registration is handled by the Registry of Companies and Business Names (ROCBN). The incorporation process typically takes five to ten business days. A minimum of one director who is a Brunei resident is generally required for locally incorporated companies.",
            "The government has introduced incentives under the Investment Incentives Order to attract foreign direct investment, particularly in priority sectors aligned with the Wawasan Brunei 2035 diversification goals."
        ],
        "taxation": [
            "Brunei imposes no personal income tax, making it an attractive jurisdiction for individual wealth management. Corporate income tax is levied at a standard rate of 18.5 percent on chargeable income derived from or accruing in Brunei.",
            "There is no value-added tax (VAT) or goods and services tax (GST) in Brunei. Pioneer industry status may provide tax exemptions for qualifying enterprises in promoted sectors. Withholding tax applies to certain payments made to non-residents, including royalties and technical service fees.",
            "Brunei has entered into a limited number of double taxation agreements. The absence of personal income tax and certain consumption taxes makes Brunei's overall tax environment one of the most favorable in ASEAN."
        ],
        "employment": [
            "Employment in Brunei is primarily governed by the Employment Order 2009, which sets out minimum standards for working hours, leave entitlements, termination procedures, and workplace safety. The standard work week is generally 44 hours spread across six days.",
            "Foreign workers require a valid employment pass issued by the Department of Immigration and National Registration. The government maintains a policy of prioritizing employment opportunities for Brunei citizens through its Bruneianization initiative.",
            "Employers are required to contribute to the Employees Trust Fund (TAP) and the Supplemental Contributory Pension (SCP) scheme for eligible employees. Mandatory contributions support retirement savings for workers in the formal economy."
        ],
        "ip": [
            "Intellectual property protection in Brunei is administered by the Brunei Intellectual Property Office (BruIPO). The country has enacted legislation covering trademarks, patents, industrial designs, and copyright, broadly aligned with international standards.",
            "Brunei is a member of the World Intellectual Property Organization (WIPO) and has acceded to key international treaties including the Paris Convention and the Patent Cooperation Treaty (PCT). Trademark registration follows a first-to-file system.",
            "The government has strengthened IP enforcement in recent years through amendments to the Trade Marks Act and increased customs cooperation. The protection period for patents is 20 years from the filing date, consistent with TRIPS Agreement requirements."
        ],
        "investment": [
            "Foreign investment in Brunei is regulated by the Brunei Economic Development Board (BEDB), which serves as the primary agency for investment promotion and facilitation. The government actively encourages FDI in non-oil sectors, particularly in downstream industries, food technology, and services.",
            "There are generally no restrictions on foreign ownership in most sectors, though certain industries such as media, fishing, and retail may require local participation. The Foreign Investment Guidelines provide clarity on sectors open to foreign investors and any applicable conditions.",
            "Brunei offers several investment incentives including pioneer status (tax holiday of up to 11 years), investment tax allowances, and customs duty exemptions on imported machinery and raw materials for qualifying enterprises."
        ],
        "dna_help": [
            "Through its membership in the ASEAN Attorneys Alliance, Dej-Udom and Associates works with established legal practitioners in Brunei to assist clients navigating the Bruneian legal landscape. Our coordinated approach ensures that multinational companies receive consistent, high-quality legal guidance.",
            "Our services for clients operating in or entering the Brunei market include company incorporation and structuring, regulatory compliance advisory, employment law guidance, intellectual property registration and enforcement, and cross-border transaction support.",
            "Whether you are establishing a new venture in Brunei or managing existing operations, our network provides the local expertise and regional perspective needed to address the unique challenges and opportunities in this jurisdiction."
        ]
    },
    {
        "slug": "cambodia",
        "name": "Cambodia",
        "flag": "&#x1F1F0;&#x1F1ED;",
        "capital": "Phnom Penh",
        "legal_system": "Civil law",
        "home": False,
        "overview": [
            "The Kingdom of Cambodia is a constitutional monarchy situated in the heart of mainland Southeast Asia. With a population of approximately 17 million, Cambodia has experienced rapid economic growth over the past two decades, driven by garment manufacturing, tourism, agriculture, and construction. Cambodia became a member of ASEAN in 1999.",
            "Cambodia's economy has attracted significant foreign investment due to its liberal trade policies, competitive labor costs, and preferential access to major export markets. The country benefits from various preferential trade arrangements including the Everything But Arms (EBA) initiative with the European Union.",
            "Phnom Penh, the capital city, serves as the country's commercial hub and hosts the majority of financial institutions, international organizations, and professional services firms operating in the market."
        ],
        "legal_framework": [
            "Cambodia's legal system is based on the civil law tradition, drawing from French legal principles introduced during the colonial period. The 1993 Constitution established the framework for the current legal system, including an independent judiciary and fundamental rights protections.",
            "The court system consists of the Supreme Court, the Court of Appeal, provincial and municipal courts, and the newly established Commercial Court. Cambodia also has a National Arbitration Center (NAC) for commercial dispute resolution.",
            "Key commercial legislation includes the Law on Commercial Enterprises (2005), the Civil Code (2007), the Law on Investment (2003, amended 2021), and the Labor Law (1997). The regulatory environment continues to evolve as new laws and implementing regulations are enacted."
        ],
        "business_formation": [
            "Foreign investors in Cambodia may establish businesses through several vehicles: limited liability companies, branches of foreign corporations, representative offices, or partnerships. The private limited company is the most widely used structure for foreign investment.",
            "Company registration is processed through the Ministry of Commerce, with the process typically completed within several weeks. Cambodia allows 100 percent foreign ownership in most sectors, making it one of the most open economies in ASEAN for foreign investment.",
            "The Council for the Development of Cambodia (CDC) administers the investment registration process for qualifying projects. Registered investment projects may receive certain incentives including tax holidays, duty-free import of capital goods, and other benefits under the Law on Investment."
        ],
        "taxation": [
            "Cambodia's tax system is administered by the General Department of Taxation under the Ministry of Economy and Finance. The standard corporate income tax rate is 20 percent for most businesses, with a minimum tax of 1 percent of annual turnover applying where a company's tax liability would otherwise be lower.",
            "Value-added tax (VAT) is levied at a standard rate of 10 percent on the supply of goods and services in Cambodia and on imports. Certain supplies are zero-rated or exempt. Withholding taxes apply to various types of payments including dividends, interest, royalties, and payments for services.",
            "Qualifying investment projects approved by the CDC may receive tax incentives including income tax holidays of up to nine years, customs duty exemptions, and additional deductions. Cambodia has entered into a growing number of bilateral investment treaties and double taxation agreements."
        ],
        "employment": [
            "Employment in Cambodia is governed by the Labor Law of 1997 and its subsequent amendments. The law establishes minimum standards for employment contracts, working hours (48 hours per week maximum), overtime compensation, annual leave, and termination procedures.",
            "Foreign employees require a valid work permit and employment card issued by the Ministry of Labor and Vocational Training. The law limits foreign workers to a maximum of 10 percent of a company's total workforce, though exemptions may be granted for specialized positions.",
            "Cambodia has a minimum wage system that is reviewed annually. Employers must contribute to the National Social Security Fund (NSSF), which provides coverage for occupational risks, health care, and pension benefits for eligible employees."
        ],
        "ip": [
            "Intellectual property protection in Cambodia is administered by the Department of Intellectual Property Rights under the Ministry of Commerce for trademarks and industrial designs, and by the Ministry of Industry, Science, Technology and Innovation for patents.",
            "Cambodia is a member of WIPO and has acceded to several international IP treaties including the Paris Convention, the PCT, and the Madrid Protocol for trademarks. The country's IP laws have been modernized to align with TRIPS Agreement requirements.",
            "Trademark registration follows a first-to-file system with a registration validity of 10 years, renewable indefinitely. Patent protection is available for 20 years from the filing date. Cambodia has also validated patents granted by certain foreign patent offices under its patent registration system."
        ],
        "investment": [
            "Cambodia maintains one of the most liberal foreign investment regimes in ASEAN. The Law on Investment (2003, as amended in 2021) provides the primary framework for foreign investment, administered by the Council for the Development of Cambodia (CDC).",
            "Foreign investors may hold 100 percent ownership in most sectors. Key restrictions apply to land ownership (foreigners cannot own land directly but may hold long-term leases) and a limited number of sectors reserved for Cambodian nationals.",
            "The government has designated Special Economic Zones (SEZs) throughout the country, offering infrastructure, streamlined administrative procedures, and additional investment incentives to attract manufacturing and export-oriented businesses."
        ],
        "dna_help": [
            "Through the ASEAN Attorneys Alliance, Dej-Udom and Associates collaborates with experienced legal professionals in Cambodia to provide comprehensive support for clients entering or operating in the Cambodian market.",
            "Our services include company formation and corporate structuring, investment registration with the CDC, regulatory and licensing compliance, employment law advisory, intellectual property protection, real estate and land use arrangements, and cross-border transaction support.",
            "With our deep understanding of both Thai and Cambodian legal systems, we are well positioned to assist companies with cross-border operations between these neighboring markets, ensuring regulatory compliance and effective risk management."
        ]
    },
    {
        "slug": "indonesia",
        "name": "Indonesia",
        "flag": "&#x1F1EE;&#x1F1E9;",
        "capital": "Jakarta",
        "legal_system": "Civil law",
        "home": False,
        "overview": [
            "The Republic of Indonesia is the largest economy and most populous nation in Southeast Asia, with approximately 280 million people spread across more than 17,000 islands. As a founding member of ASEAN, Indonesia plays a central role in regional economic integration and diplomacy.",
            "Indonesia's economy is driven by domestic consumption, natural resources, manufacturing, and an expanding digital economy. The country has attracted increasing foreign investment as the government implements reforms to improve the business environment, most notably through the Omnibus Law on Job Creation enacted in 2020.",
            "Jakarta, the national capital, is the country's primary business hub, though the government has announced plans to relocate the capital to Nusantara in East Kalimantan. Major commercial centers also include Surabaya, Medan, Bandung, and Bali."
        ],
        "legal_framework": [
            "Indonesia's legal system is based on the civil law tradition, with significant influences from Dutch colonial law, customary (adat) law, and Islamic law. The 1945 Constitution serves as the supreme law, and legislation is enacted by the People's Representative Council (DPR).",
            "The court system comprises the Supreme Court, high courts, district courts, and specialized courts including the Commercial Court, Tax Court, and Religious Courts. Indonesia also recognizes alternative dispute resolution through the Indonesian National Board of Arbitration (BANI).",
            "Key commercial statutes include the Indonesian Civil Code, the Company Law (Law No. 40 of 2007), the Investment Law (Law No. 25 of 2007), and the Omnibus Law on Job Creation (Law No. 6 of 2023), which consolidated and reformed numerous regulations affecting business operations."
        ],
        "business_formation": [
            "Foreign investors typically establish a PT PMA (Penanaman Modal Asing), a foreign investment limited liability company, as the primary vehicle for direct investment. Other structures include representative offices and branch offices, though these have more limited operational scope.",
            "Company establishment is processed through the Online Single Submission (OSS) system, which integrates business licensing and investment registration. The minimum capital requirements for PT PMA companies are IDR 10 billion in total investment, with a paid-up capital of at least IDR 2.5 billion.",
            "The Positive Investment List (Presidential Regulation No. 10 of 2021) replaced the former Negative Investment List and specifies business sectors that are either open, conditionally open, or reserved for specific categories of investors, including foreign ownership limitations."
        ],
        "taxation": [
            "Indonesia's tax system is administered by the Directorate General of Taxes under the Ministry of Finance. The standard corporate income tax rate is 22 percent. Listed companies meeting certain public ownership thresholds may receive a reduced rate.",
            "Value-added tax (VAT) is levied at a standard rate of 11 percent (with a planned increase to 12 percent). Indonesia applies withholding taxes on various domestic and cross-border payments including dividends, interest, royalties, and service fees.",
            "Indonesia has an extensive network of double taxation agreements covering more than 70 jurisdictions. Tax incentives are available for investments in certain sectors and locations, including tax holidays of up to 20 years for pioneer industries and investment allowances for specified business activities."
        ],
        "employment": [
            "Employment in Indonesia is governed primarily by the Manpower Law (Law No. 13 of 2003) as amended by the Omnibus Law on Job Creation. Key provisions cover employment contracts, working hours (40 hours per week), overtime, leave entitlements, and termination procedures.",
            "Foreign workers must obtain an Expatriate Placement Plan (RPTKA) approval and a work permit (IMTA) before commencing employment. The government requires employers to designate Indonesian counterparts for knowledge transfer, and certain positions are restricted to Indonesian nationals.",
            "Indonesia has a provincially determined minimum wage system that is adjusted annually. Employers and employees must participate in the national social security programs (BPJS Ketenagakerjaan and BPJS Kesehatan) covering employment injury, old age, death, pension, and health insurance."
        ],
        "ip": [
            "Intellectual property protection in Indonesia is administered by the Directorate General of Intellectual Property (DGIP) under the Ministry of Law and Human Rights. The country has comprehensive IP legislation covering patents, trademarks, copyright, industrial designs, trade secrets, and geographical indications.",
            "Indonesia is a member of WIPO and party to major international IP treaties including the Paris Convention, the PCT, the Madrid Protocol, and the Berne Convention. The trademark and patent systems follow a first-to-file principle.",
            "IP enforcement has been strengthened through the establishment of the Commercial Court for IP disputes, increased customs enforcement against counterfeit goods, and amendments to IP laws to address digital piracy and online trademark infringement."
        ],
        "investment": [
            "Foreign investment in Indonesia is regulated under the Investment Law (Law No. 25 of 2007) and the implementing regulations under the Omnibus Law on Job Creation. The Indonesia Investment Coordinating Board (BKPM), now the Ministry of Investment, serves as the primary agency for investment facilitation.",
            "The Positive Investment List defines sectors open to foreign investors, those with conditions (including foreign ownership caps), and those reserved for micro, small, and medium enterprises or cooperatives. Recent reforms have expanded access in many sectors previously restricted to foreign investors.",
            "Indonesia offers a range of investment incentives including tax holidays, tax allowances, customs duty exemptions, and investment facilities in Special Economic Zones (SEZs). The government continues to streamline regulatory procedures through digital transformation of licensing processes."
        ],
        "dna_help": [
            "Through the ASEAN Attorneys Alliance, Dej-Udom and Associates partners with leading Indonesian law firms to provide seamless legal support for clients with business interests in Indonesia's dynamic market.",
            "Our coordinated services encompass company establishment and licensing, foreign investment compliance, mergers and acquisitions, commercial contract drafting and negotiation, employment law advisory, IP portfolio management, and dispute resolution strategy.",
            "Given the complexity of Indonesia's regulatory landscape, our collaborative approach ensures clients receive locally informed guidance combined with our regional perspective, enabling effective navigation of cross-border legal challenges between Thailand, Indonesia, and other ASEAN markets."
        ]
    },
    {
        "slug": "laos",
        "name": "Laos",
        "flag": "&#x1F1F1;&#x1F1E6;",
        "capital": "Vientiane",
        "legal_system": "Civil law (socialist)",
        "home": False,
        "overview": [
            "The Lao People's Democratic Republic is a landlocked nation in the center of mainland Southeast Asia, bordered by China, Vietnam, Cambodia, Thailand, and Myanmar. With a population of approximately 7.5 million, Laos has experienced steady economic growth driven by hydropower development, mining, agriculture, and tourism. Laos joined ASEAN in 1997.",
            "The country's strategic location at the crossroads of major regional connectivity corridors, including the Laos-China Railway completed in 2021, has enhanced its position as a land-linked hub for trade and investment in the Greater Mekong Subregion.",
            "Vientiane, the capital, is the country's administrative and commercial center. The economy operates under a socialist-oriented market model, where the state maintains a guiding role while allowing private sector and foreign participation in economic activities."
        ],
        "legal_framework": [
            "Laos operates under a civil law system influenced by its socialist political framework. The 1991 Constitution, amended in 2003 and 2015, establishes the Lao People's Revolutionary Party as the leading organ of the political system and provides the foundation for the legal structure.",
            "The court system includes the People's Supreme Court, appellate courts, provincial and municipal courts, and district courts. Commercial dispute resolution is also available through the Lao International Arbitration Center. The National Assembly is the sole legislative body.",
            "Key commercial legislation includes the Enterprise Law (2013, amended 2023), the Investment Promotion Law (2016, amended 2023), the Tax Law (2019), and the Labor Law (2013). The legal framework continues to develop as Laos integrates more fully into the regional and global economy."
        ],
        "business_formation": [
            "Foreign investors may establish businesses in Laos through limited companies, sole proprietorships (limited to Lao nationals), partnerships, branch offices, or representative offices. The limited company is the most common vehicle for foreign investment, available as a sole-owner limited company or a multi-owner limited company.",
            "Business registration is handled through the Enterprise Registration Office under the Ministry of Industry and Commerce. The government has worked to simplify registration procedures through a single-window service mechanism.",
            "The Investment Promotion Law classifies investments into general business activities and concession-based activities. Concessions are required for natural resource exploitation, infrastructure projects, and certain government-authorized activities, typically granted for defined periods."
        ],
        "taxation": [
            "Laos's tax system is administered by the Tax Department under the Ministry of Finance. The standard corporate income tax rate is 20 percent, with reduced rates available for certain promoted sectors and activities.",
            "Value-added tax (VAT) is levied at a standard rate of 7 percent on the supply of goods, services, and imports. Withholding taxes apply to various cross-border and domestic payments including dividends, interest, royalties, and service fees.",
            "Tax incentives for promoted investments may include profit tax exemptions for defined periods, import duty exemptions on capital goods and raw materials, and land rental fee reductions. The specific incentives depend on the investment zone, sector, and project scale."
        ],
        "employment": [
            "Employment in Laos is governed by the Labor Law of 2013, which establishes basic employment standards including employment contracts, working hours (maximum 48 hours per week), overtime, annual leave, and termination procedures.",
            "Foreign workers must obtain a work permit from the Ministry of Labor and Social Welfare. The government encourages skills transfer and generally requires that foreign employees in non-specialized positions be progressively replaced by trained Lao nationals.",
            "Laos has a minimum wage system and requires employers to contribute to the National Social Security Fund for eligible employees, covering healthcare, maternity, employment injury, retirement, and survivorship benefits."
        ],
        "ip": [
            "Intellectual property protection in Laos is managed by the Department of Intellectual Property under the Ministry of Industry and Commerce. The IP legal framework includes the Intellectual Property Law (2011, amended 2017), which covers patents, petty patents, industrial designs, trademarks, trade names, geographical indications, trade secrets, and copyright.",
            "Laos became a member of the World Trade Organization in 2013 and has progressively aligned its IP laws with TRIPS Agreement requirements. The country has acceded to the Paris Convention, the Berne Convention, and the PCT.",
            "Trademark registration follows a first-to-file system with protection lasting 10 years from the registration date, renewable indefinitely. Patent protection is available for 20 years from the filing date. IP enforcement mechanisms continue to develop alongside the broader legal infrastructure."
        ],
        "investment": [
            "Foreign investment in Laos is governed by the Investment Promotion Law (2016, amended 2023), administered by the Ministry of Planning and Investment. The law establishes the framework for investment promotion, incentives, and investor protections.",
            "Laos classifies investment activities across three zones based on geographic development priorities, with enhanced incentives for investments in economically disadvantaged areas. Special Economic Zones (SEZs) and Specific Economic Zones offer additional benefits for qualifying projects.",
            "Foreign investors may hold 100 percent ownership in many sectors, though some activities require joint ventures with Lao partners or are reserved for Lao nationals. Concession agreements for natural resource and infrastructure projects are negotiated individually with the government."
        ],
        "dna_help": [
            "Through the ASEAN Attorneys Alliance, Dej-Udom and Associates collaborates with experienced legal professionals in Laos to provide clients with reliable legal guidance in this emerging market.",
            "Our services for clients operating in or entering the Lao market include company formation and licensing, investment promotion application support, regulatory compliance, employment law advisory, intellectual property registration, concession agreement review, and cross-border transaction assistance.",
            "Given the close geographic and economic ties between Thailand and Laos, our firm is well positioned to advise clients on cross-border operations, bilateral trade arrangements, and investment opportunities in the Lao-Thai economic corridor."
        ]
    },
    {
        "slug": "malaysia",
        "name": "Malaysia",
        "flag": "&#x1F1F2;&#x1F1FE;",
        "capital": "Kuala Lumpur",
        "legal_system": "Common law and Sharia",
        "home": False,
        "overview": [
            "Malaysia is a federal constitutional monarchy comprising 13 states and three federal territories in Southeast Asia. With a population of approximately 33 million, Malaysia has one of the most diversified and industrialized economies in ASEAN, driven by manufacturing, services, palm oil, petroleum, and an expanding technology sector. Malaysia is a founding member of ASEAN.",
            "The country has consistently ranked among the top destinations for foreign direct investment in the region, supported by well-developed infrastructure, a skilled workforce, and a transparent regulatory environment. Malaysia's strategic position along the Strait of Malacca provides a natural advantage for trade and logistics.",
            "Kuala Lumpur serves as the national capital and primary commercial hub, while Putrajaya functions as the federal administrative center. Other important commercial centers include Penang, Johor Bahru, and the Iskandar Malaysia economic corridor."
        ],
        "legal_framework": [
            "Malaysia operates a dual legal system comprising common law for civil and commercial matters and Sharia law for personal and family matters affecting Muslims. The Federal Constitution is the supreme law, establishing the framework for governance, fundamental liberties, and the distribution of powers between federal and state governments.",
            "The civil court system includes the Federal Court, the Court of Appeal, High Courts, Sessions Courts, and Magistrates' Courts. A parallel Syariah Court system operates at the state level. The Kuala Lumpur Regional Centre for Arbitration (AIAC) is a prominent institution for international commercial arbitration.",
            "Key commercial legislation includes the Companies Act 2016, the Contracts Act 1950, the Employment Act 1955, the Patents Act 1983, the Trademarks Act 2019, and the Personal Data Protection Act 2010. Malaysia's commercial law framework is well developed and largely aligned with international best practices."
        ],
        "business_formation": [
            "Foreign investors may establish businesses in Malaysia through private limited companies (Sdn Bhd), public limited companies (Bhd), branches of foreign companies, representative offices, or regional offices. The private limited company (Sdn Bhd) is the most commonly used vehicle for foreign investment.",
            "Company incorporation is processed through the Companies Commission of Malaysia (SSM) via the MyCoID online portal. The process is efficient and typically completed within a few business days. Malaysia allows 100 percent foreign equity ownership in most sectors, particularly in manufacturing.",
            "The Malaysian Investment Development Authority (MIDA) is the principal agency for promoting and facilitating investment. Projects in promoted sectors may receive incentives such as Pioneer Status (tax holiday) or Investment Tax Allowance. The government also promotes investment through various corridors and development regions."
        ],
        "taxation": [
            "Malaysia's tax system is administered by the Inland Revenue Board (LHDN). The standard corporate income tax rate is 24 percent, with a reduced rate of 17 percent on the first MYR 600,000 of chargeable income for SMEs meeting qualifying conditions.",
            "Malaysia repealed its Goods and Services Tax (GST) in 2018 and replaced it with the Sales and Services Tax (SST). Sales tax is levied at 5 or 10 percent on manufactured and imported goods, while service tax is imposed at 8 percent on prescribed taxable services.",
            "Malaysia has an extensive network of over 75 double taxation agreements. Investment incentives include Pioneer Status (up to 10 years of 70 to 100 percent income tax exemption), Investment Tax Allowance, Reinvestment Allowance, and sector-specific incentives for digital economy, green technology, and principal hub activities."
        ],
        "employment": [
            "Employment in Malaysia is governed by the Employment Act 1955 (as amended in 2022), the Industrial Relations Act 1967, and related legislation. The Employment Act applies to employees earning up to MYR 4,000 per month and certain categories of workers regardless of salary. The 2022 amendments extended key protections to all employees.",
            "Foreign workers require a valid Employment Pass or Visit Pass (Temporary Employment) issued by the Immigration Department. The Employment Act imposes requirements on working hours (maximum 45 hours per week following the 2022 amendments), overtime, rest days, public holidays, and termination procedures.",
            "Malaysia has a minimum wage system applicable nationwide. Employers must contribute to the Employees Provident Fund (EPF) for retirement savings and the Social Security Organization (SOCSO) for employment injury and invalidity benefits."
        ],
        "ip": [
            "Malaysia has a well-established intellectual property regime administered by the Intellectual Property Corporation of Malaysia (MyIPO). The country's IP legislation covers trademarks (Trademarks Act 2019), patents (Patents Act 1983), industrial designs (Industrial Designs Act 1996), copyright (Copyright Act 1987), and geographical indications.",
            "Malaysia is a member of WIPO and party to major international treaties including the Paris Convention, the Berne Convention, the PCT, and the Madrid Protocol. The country's IP framework is recognized as among the most developed in ASEAN.",
            "IP enforcement is supported by specialized IP courts within the High Court, customs enforcement mechanisms, and coordination between MyIPO and law enforcement agencies. Malaysia has also implemented provisions for the protection of trade secrets and confidential information."
        ],
        "investment": [
            "Foreign investment in Malaysia is facilitated by the Malaysian Investment Development Authority (MIDA) and regulated under the Promotion of Investments Act 1986, the Income Tax Act 1967, and various sector-specific regulations.",
            "Malaysia allows 100 percent foreign equity in most manufacturing and services sectors, with certain sectors maintaining equity conditions or requiring Bumiputera participation under the New Economic Policy. The government has progressively liberalized foreign equity requirements across many industries.",
            "Investment incentives are available for manufacturing, services, high technology, and green sectors. Special incentive structures exist for principal hubs, global trading companies, and investments in the promoted economic corridors. Free Trade Zones and licensed manufacturing warehouses offer customs benefits for export-oriented operations."
        ],
        "dna_help": [
            "Through the ASEAN Attorneys Alliance, Dej-Udom and Associates works with established Malaysian law firms to deliver comprehensive legal support for clients with business interests in Malaysia's sophisticated market.",
            "Our coordinated services include company incorporation and structuring, investment approvals and incentive applications, mergers and acquisitions, commercial agreements, employment law compliance, intellectual property portfolio management, data protection advisory, and cross-border dispute resolution.",
            "With strong legal ties between Thailand and Malaysia and significant bilateral trade flows, our collaborative approach enables seamless advice for clients operating across both jurisdictions and throughout the broader ASEAN region."
        ]
    },
    {
        "slug": "myanmar",
        "name": "Myanmar",
        "flag": "&#x1F1F2;&#x1F1F2;",
        "capital": "Naypyidaw",
        "legal_system": "Common law",
        "home": False,
        "overview": [
            "The Republic of the Union of Myanmar is a resource-rich country situated at the crossroads of South and Southeast Asia, sharing borders with China, India, Bangladesh, Laos, and Thailand. With a population of approximately 54 million, Myanmar has significant natural resources including oil, gas, minerals, timber, and gemstones. Myanmar joined ASEAN in 1997.",
            "Myanmar's economy has experienced significant challenges and transitions in recent years. The country has substantial long-term economic potential due to its natural resources, young labor force, and strategic geographic position connecting major Asian economies.",
            "Naypyidaw is the administrative capital, while Yangon remains the largest city and primary commercial center. Other important economic centers include Mandalay, the Thilawa Special Economic Zone near Yangon, and border trade zones along the Thai and Chinese frontiers."
        ],
        "legal_framework": [
            "Myanmar's legal system is rooted in common law traditions inherited from the British colonial period, supplemented by customary law and statutory enactments. The 2008 Constitution provides the framework for governance and the legal system.",
            "The court system includes the Supreme Court of the Union, High Courts of the Region and State, district courts, township courts, and other courts established by law. Commercial dispute resolution options include arbitration under the Arbitration Law 2016.",
            "Key commercial legislation includes the Myanmar Companies Law 2017, the Myanmar Investment Law 2016, the Financial Institutions Law 2016, and the Intellectual Property Laws enacted in 2019. The regulatory environment has undergone significant changes as the country navigates its ongoing political situation."
        ],
        "business_formation": [
            "Under the Myanmar Companies Law 2017, foreign investors may establish companies as either a foreign company or a Myanmar company with foreign shareholding. A company is classified as foreign if more than 35 percent of its shares are held by foreign persons.",
            "Company registration is administered by the Directorate of Investment and Company Administration (DICA) through the electronic company registration system (MyCO). The incorporation process has been modernized to allow online filing and processing.",
            "Foreign investors may also establish branch offices or representative offices of foreign companies. The Myanmar Investment Law 2016 provides for additional facilitation and incentives for investments that receive an MIC Permit or Endorsement from the Myanmar Investment Commission."
        ],
        "taxation": [
            "Myanmar's tax system is administered by the Internal Revenue Department under the Ministry of Planning and Finance. The standard corporate income tax rate is 22 percent for resident companies and 22 percent for branches of foreign companies. Companies operating under an MIC Permit may receive income tax exemptions.",
            "Commercial tax (similar to VAT) is levied at rates ranging from 3 to 8 percent depending on the category of goods or services, with a general rate of 5 percent. Withholding taxes apply to various payments including interest, royalties, and payments for services.",
            "Tax incentives under the Myanmar Investment Law include income tax exemptions for 3 to 7 years depending on the development zone, customs duty exemptions on imported capital goods and raw materials, and other benefits for qualifying investments."
        ],
        "employment": [
            "Employment in Myanmar is governed by multiple laws including the Employment and Skill Development Law 2013, the Factories Act 1951, the Shops and Establishments Law 2016, and the Social Security Law 2012. Working hours are generally limited to 44 hours per week for factories and 48 hours for shops and establishments.",
            "Foreign workers must obtain a valid work permit. The Employment and Skill Development Law requires employers to enter into written employment agreements and sets out provisions for leave, overtime, and termination.",
            "The Social Security Law provides for contributions to the social security fund by both employers and employees, covering healthcare, maternity, employment injury, and other benefits. Myanmar has a minimum wage system that is reviewed periodically."
        ],
        "ip": [
            "Myanmar enacted comprehensive intellectual property legislation in 2019, including the Trademark Law, the Industrial Design Law, the Patent Law, and the Copyright Law. These laws represent a significant modernization of Myanmar's IP protection framework.",
            "The implementation of the trademark registration system has commenced, allowing rights holders to register their marks with the IP Department under the Ministry of Commerce. Prior to this legislation, trademark protection relied primarily on declarations of ownership registered with the Office of Registration of Deeds.",
            "Myanmar has acceded to the Paris Convention and has taken steps toward joining additional international IP treaties. The development of the IP registration and enforcement infrastructure is an ongoing process as the regulatory framework matures."
        ],
        "investment": [
            "Foreign investment in Myanmar is governed by the Myanmar Investment Law 2016, administered by the Myanmar Investment Commission (MIC) and the Directorate of Investment and Company Administration (DICA). The law provides the framework for investment promotion, investor protections, and incentive mechanisms.",
            "Foreign investors may hold up to 100 percent ownership in many sectors, though certain activities are restricted or require joint ventures with Myanmar partners under the Notification on Restricted Activities. An MIC Permit is required for investments in certain specified categories.",
            "The government has established Special Economic Zones at Thilawa, Dawei, and Kyaukphyu, each offering preferential tax treatment, customs benefits, and streamlined administrative procedures for qualifying investments. Current conditions should be carefully assessed with local counsel."
        ],
        "dna_help": [
            "Through the ASEAN Attorneys Alliance, Dej-Udom and Associates maintains relationships with legal professionals in Myanmar who can assist clients navigating the complexities of the Myanmar legal and business environment.",
            "Our services include corporate structuring advisory, investment law compliance, commercial contract review, employment law guidance, intellectual property registration assistance, and due diligence support for market entry assessments.",
            "Given the dynamic regulatory environment in Myanmar, we emphasize the importance of obtaining up-to-date legal advice tailored to current conditions. Our network ensures clients receive timely guidance reflecting the latest regulatory developments in this jurisdiction."
        ]
    },
    {
        "slug": "philippines",
        "name": "Philippines",
        "flag": "&#x1F1F5;&#x1F1ED;",
        "capital": "Manila",
        "legal_system": "Mixed legal system",
        "home": False,
        "overview": [
            "The Republic of the Philippines is an archipelago of over 7,600 islands in the western Pacific Ocean. With a population exceeding 115 million, the Philippines has one of the most dynamic economies in ASEAN, driven by the services sector, particularly business process outsourcing (BPO), as well as remittances from overseas Filipino workers, manufacturing, and agriculture. The Philippines is a founding member of ASEAN.",
            "The country's large English-speaking population, young demographic profile, and growing consumer market make it an attractive destination for foreign investment. The government has undertaken reforms to improve the business environment, including amendments to foreign investment restrictions.",
            "Manila, the capital, and the broader National Capital Region (NCR) serve as the country's primary commercial and financial hub. Other significant economic centers include Cebu, Davao, Clark, and Subic."
        ],
        "legal_framework": [
            "The Philippines has a mixed legal system combining civil law (derived from Spanish law), common law (from the American colonial period), and customary law. The 1987 Constitution provides the framework for government, civil rights, and the national economy.",
            "The court system consists of the Supreme Court, the Court of Appeals, the Sandiganbayan (anti-graft court), the Court of Tax Appeals, Regional Trial Courts, and Metropolitan/Municipal Trial Courts. The Philippine Dispute Resolution Center (PDRCI) facilitates arbitration and mediation.",
            "Key commercial legislation includes the Revised Corporation Code (2019), the Foreign Investments Act (as amended), the Retail Trade Liberalization Act (as amended), the Public Service Act (as amended in 2022), and the Data Privacy Act of 2012."
        ],
        "business_formation": [
            "Foreign investors may establish businesses in the Philippines through domestic corporations, branch offices of foreign corporations, representative offices, or regional headquarters and regional operating headquarters (RHQ/ROHQ). The domestic corporation is the most common vehicle.",
            "Company registration is processed through the Securities and Exchange Commission (SEC). The Revised Corporation Code of 2019 allows the formation of one-person corporations and has modernized corporate governance requirements. Registration can be completed online through the SEC's eFAST system.",
            "The Foreign Investments Act restricts foreign equity in certain sectors as defined in the Regular Foreign Investments Negative List (RFINL), which is updated every two years. The 2022 amendments to the Public Service Act opened certain public services to full foreign ownership."
        ],
        "taxation": [
            "The Philippine tax system is administered by the Bureau of Internal Revenue (BIR). The Corporate Recovery and Tax Incentives for Enterprises (CREATE) Act of 2021 reduced the regular corporate income tax rate to 25 percent, with a 20 percent rate for domestic corporations with net taxable income not exceeding PHP 5 million and total assets not exceeding PHP 100 million.",
            "Value-added tax (VAT) is levied at 12 percent on the sale of goods, properties, and services. Certain transactions are zero-rated or VAT-exempt. Withholding taxes apply to various payments including compensation, dividends, interest, royalties, and payments to non-residents.",
            "The CREATE Act rationalized fiscal incentives, with the Fiscal Incentives Review Board (FIRB) overseeing the grant of incentives. Registered business enterprises in special economic zones and freeport zones may enjoy income tax holidays, special tax rates, and duty-free importation of capital equipment."
        ],
        "employment": [
            "Employment in the Philippines is governed by the Labor Code of the Philippines (Presidential Decree No. 442) and its implementing rules. Key provisions cover employment standards including working hours (maximum 8 hours per day), overtime, rest periods, holiday pay, minimum wage, and termination of employment.",
            "Foreign nationals require a valid Alien Employment Permit (AEP) issued by the Department of Labor and Employment (DOLE) and an appropriate visa. Certain positions in companies registered with investment promotion agencies may be exempt from the AEP requirement.",
            "The Philippines has a regional minimum wage system set by Regional Tripartite Wages and Productivity Boards. Employers must contribute to the Social Security System (SSS), Philippine Health Insurance Corporation (PhilHealth), and Home Development Mutual Fund (Pag-IBIG) for eligible employees."
        ],
        "ip": [
            "Intellectual property in the Philippines is administered by the Intellectual Property Office of the Philippines (IPOPHL). The Intellectual Property Code (Republic Act No. 8293) provides comprehensive protection for patents, utility models, industrial designs, trademarks, copyright, and trade secrets.",
            "The Philippines is a member of WIPO and party to major international IP treaties including the Paris Convention, the PCT, the Madrid Protocol, the Berne Convention, and the TRIPS Agreement. The IPOPHL has modernized its filing systems to facilitate electronic submission of applications.",
            "IP enforcement mechanisms include civil, criminal, and administrative remedies. The IPOPHL has adjudicatory functions for certain IP disputes through its Bureau of Legal Affairs. The Bureau of Customs also plays an active role in border enforcement against counterfeit and pirated goods."
        ],
        "investment": [
            "Foreign investment in the Philippines is regulated under the Foreign Investments Act (FIA), the Omnibus Investments Code, and the CREATE Act. The Board of Investments (BOI), Philippine Economic Zone Authority (PEZA), and other investment promotion agencies facilitate and incentivize qualifying investments.",
            "The Regular Foreign Investments Negative List specifies sectors where foreign equity is limited or prohibited. Recent legislative reforms, including the amendments to the Public Service Act, the Retail Trade Liberalization Act, and the Foreign Investments Act, have significantly expanded opportunities for foreign investors.",
            "The Philippines offers various investment incentives through registered investment promotion agencies, including income tax holidays, special corporate income tax rates, enhanced deductions, duty exemptions, and VAT exemptions or zero-rating on local purchases of goods and services."
        ],
        "dna_help": [
            "Through the ASEAN Attorneys Alliance, Dej-Udom and Associates collaborates with reputable Philippine law firms to provide comprehensive legal support for clients entering or expanding in the Philippine market.",
            "Our coordinated services include corporate formation and restructuring, foreign investment compliance, mergers and acquisitions, commercial contract negotiation, employment law advisory, intellectual property protection, tax planning support, and dispute resolution strategy.",
            "With the Philippines' unique mixed legal system and evolving regulatory landscape, our collaborative approach ensures clients benefit from deep local expertise combined with our firm's regional knowledge and cross-border capabilities."
        ]
    },
    {
        "slug": "singapore",
        "name": "Singapore",
        "flag": "&#x1F1F8;&#x1F1EC;",
        "capital": "Singapore",
        "legal_system": "Common law",
        "home": False,
        "overview": [
            "The Republic of Singapore is a city-state and island nation located at the southern tip of the Malay Peninsula. With a population of approximately 5.9 million, Singapore has established itself as one of the world's leading financial centers, a premier trading hub, and a gateway for investment into Southeast Asia. Singapore is a founding member of ASEAN.",
            "Singapore's economy is characterized by strong rule of law, world-class infrastructure, a highly skilled workforce, and a business-friendly regulatory environment. The country consistently ranks among the top globally for ease of doing business, competitiveness, and protection of intellectual property.",
            "The country's strategic location, extensive network of free trade agreements, and comprehensive double taxation agreement network make it the preferred regional headquarters for many multinational corporations operating in ASEAN."
        ],
        "legal_framework": [
            "Singapore's legal system is based on English common law, complemented by statutory law enacted by Parliament. The Constitution of Singapore is the supreme law, establishing the framework for government, fundamental liberties, and the administration of justice.",
            "The court system comprises the Supreme Court (consisting of the Court of Appeal, the Appellate Division, and the General Division of the High Court), State Courts, and specialized tribunals. Singapore is also home to the Singapore International Arbitration Centre (SIAC) and the Singapore International Commercial Court (SICC), both of which are internationally recognized venues for dispute resolution.",
            "Key commercial legislation includes the Companies Act 1967, the Partnership Act 1890, the Sale of Goods Act 1979, the Employment Act 1968, and the Personal Data Protection Act 2012. Singapore's legislation is regularly updated to maintain international best practices."
        ],
        "business_formation": [
            "Foreign investors may establish businesses in Singapore through private limited companies, branch offices, representative offices, sole proprietorships, or partnerships. The private limited company (Pte. Ltd.) is the most widely used structure for foreign investment and offers limited liability to shareholders.",
            "Company incorporation is administered by the Accounting and Corporate Regulatory Authority (ACRA) and can be completed within one business day for straightforward applications through the BizFile+ online portal. There is no minimum paid-up capital requirement, and 100 percent foreign ownership is permitted in most sectors.",
            "Singapore imposes minimal restrictions on foreign investment, with only a few regulated industries (such as banking, finance, media, and telecommunications) requiring specific licenses or government approvals. The ease and speed of company formation is one of Singapore's key competitive advantages."
        ],
        "taxation": [
            "Singapore's tax system is administered by the Inland Revenue Authority of Singapore (IRAS). The headline corporate income tax rate is 17 percent, one of the lowest in the region. Effective tax rates may be lower due to various incentives and the partial tax exemption scheme for qualifying companies.",
            "Singapore does not impose capital gains tax, and there is no withholding tax on dividends. Goods and Services Tax (GST) is levied at 9 percent. Singapore operates a territorial tax system, though certain foreign-sourced income may be taxed when remitted to Singapore.",
            "Singapore has an extensive network of over 90 double taxation agreements and offers a range of tax incentives for qualifying activities, including the Global Trader Programme, the Development and Expansion Incentive, the Pioneer Certificate Incentive, and research and development tax deductions."
        ],
        "employment": [
            "Employment in Singapore is governed by the Employment Act 1968, which covers most employees (with certain exclusions for managers and executives earning above specified thresholds for certain provisions). Key provisions address employment contracts, working hours, overtime, rest days, annual leave, and termination.",
            "Foreign employees require a valid work pass issued by the Ministry of Manpower (MOM). Work pass categories include the Employment Pass (for professionals), the S Pass (for mid-level skilled workers), and the Work Permit (for semi-skilled workers). The government manages foreign workforce numbers through levies and quota systems.",
            "Singapore's Central Provident Fund (CPF) system requires mandatory contributions from both employers and employees for Singapore citizens and permanent residents, covering retirement, healthcare, and housing needs. Foreign employees are not required to contribute to CPF."
        ],
        "ip": [
            "Singapore has one of the most robust intellectual property protection regimes in Asia, administered by the Intellectual Property Office of Singapore (IPOS). The country's IP laws cover patents, trademarks, registered designs, copyright, trade secrets, plant varieties, and geographical indications.",
            "Singapore is a member of WIPO and party to all major international IP treaties, including the Paris Convention, the PCT, the Madrid Protocol, the Hague Agreement, the Berne Convention, and the Singapore Treaty on the Law of Trademarks. IPOS has been designated as an International Searching and Preliminary Examining Authority under the PCT.",
            "IP enforcement in Singapore is effective, with specialized IP courts, robust customs enforcement, and a well-functioning legal system. Singapore has been consistently recognized as having one of the strongest IP protection environments globally, making it a preferred jurisdiction for IP holding and management."
        ],
        "investment": [
            "Singapore's investment environment is regulated with a light touch, reflecting its open economy philosophy. The Economic Development Board (EDB) is the lead government agency for attracting and facilitating foreign investment. There are generally no restrictions on foreign ownership, capital repatriation, or foreign exchange transactions.",
            "The government offers a comprehensive suite of investment incentives administered by EDB, IRAS, and other agencies. These include pioneer and development and expansion incentives, research and development tax measures, intellectual property development incentives, and grants for capability building.",
            "Singapore's extensive network of over 25 free trade agreements, including the ASEAN Free Trade Area (AFTA), the Comprehensive and Progressive Agreement for Trans-Pacific Partnership (CPTPP), and bilateral agreements with major economies, enhances its attractiveness as a regional investment base."
        ],
        "dna_help": [
            "Through the ASEAN Attorneys Alliance, Dej-Udom and Associates maintains close working relationships with leading Singapore law firms to provide seamless cross-border legal services for clients with interests in both Thailand and Singapore.",
            "Our coordinated services encompass corporate structuring and regional headquarters establishment, cross-border mergers and acquisitions, commercial agreements, employment law compliance, intellectual property strategy, regulatory advisory, and international dispute resolution.",
            "Many of our multinational clients use Singapore as their regional headquarters while operating substantively in Thailand and other ASEAN markets. Our collaborative approach ensures consistent legal advice across jurisdictions, facilitating efficient cross-border operations."
        ]
    },
    {
        "slug": "thailand",
        "name": "Thailand",
        "flag": "&#x1F1F9;&#x1F1ED;",
        "capital": "Bangkok",
        "legal_system": "Civil law (codified)",
        "home": True,
        "overview": [
            "The Kingdom of Thailand, located at the center of mainland Southeast Asia, is the second-largest economy in ASEAN with a population of approximately 72 million. Thailand's economy is driven by manufacturing (particularly automotive, electronics, and food processing), services, tourism, and agriculture. Thailand is a founding member of ASEAN and has served as a key driver of regional economic integration.",
            "Thailand offers foreign investors a well-developed industrial base, extensive infrastructure, a skilled workforce, and a central geographic position that provides access to the Greater Mekong Subregion and the broader ASEAN market. The country's Eastern Economic Corridor (EEC) is a flagship initiative attracting high-technology and innovation-focused investments.",
            "Bangkok, the capital, is the country's commercial, financial, and cultural center. As Dej-Udom and Associates' home market since 1986, we offer unmatched depth of knowledge and experience in Thai law across all practice areas."
        ],
        "legal_framework": [
            "Thailand's legal system is based on the civil law tradition, with the Civil and Commercial Code (CCC) forming the foundation of private law. The Constitution of Thailand provides the framework for governance, fundamental rights, and the structure of government institutions.",
            "The court system comprises the Constitutional Court, the Courts of Justice (Supreme Court, Courts of Appeal, and Courts of First Instance), the Administrative Courts, and the Military Courts. Thailand also has a well-established arbitration framework through the Thai Arbitration Institute (TAI) under the Alternative Dispute Resolution Office.",
            "Key commercial legislation includes the Civil and Commercial Code, the Foreign Business Act B.E. 2542 (1999), the Revenue Code, the Labor Protection Act B.E. 2541 (1998), the Trademark Act B.E. 2534 (1991), the Patent Act B.E. 2522 (1979), and the Personal Data Protection Act B.E. 2562 (2019)."
        ],
        "business_formation": [
            "Foreign investors may establish businesses in Thailand through several structures: private limited companies, public limited companies, branches of foreign companies, representative offices, or regional offices. The private limited company is the most commonly used vehicle, though foreign equity may be limited under the Foreign Business Act.",
            "Company registration is processed through the Department of Business Development (DBD) under the Ministry of Commerce. A Thai private limited company requires a minimum of three promoters, at least one director, and registered capital commensurate with the nature of the business.",
            "The Foreign Business Act restricts foreign participation (defined as more than 49 percent foreign shareholding) in certain business activities listed in its three annexes. Foreign Business Licenses or Foreign Business Certificates may be obtained for restricted activities. Companies promoted by the Board of Investment (BOI) may receive exemptions from these restrictions."
        ],
        "taxation": [
            "Thailand's tax system is administered by the Revenue Department under the Ministry of Finance. The standard corporate income tax rate is 20 percent. Small and medium enterprises meeting specified criteria benefit from graduated rates on the first THB 3 million of net profit.",
            "Value-added tax (VAT) is levied at a standard rate of 7 percent (reduced from the statutory 10 percent rate). Specific Business Tax applies to certain industries including banking, finance, and real estate. Withholding taxes apply to various payments both domestically and cross-border.",
            "Thailand has an extensive network of over 60 double taxation agreements. The Board of Investment (BOI) offers significant tax incentives for promoted activities, including corporate income tax exemptions of up to 13 years, import duty exemptions on machinery and raw materials, and permission for foreign nationals to work in promoted activities."
        ],
        "employment": [
            "Employment in Thailand is governed primarily by the Labor Protection Act B.E. 2541 (1998) and its amendments, the Labor Relations Act B.E. 2518 (1975), the Social Security Act B.E. 2533 (1990), and the Workmen's Compensation Act B.E. 2537 (1994). Key provisions cover employment contracts, working hours (maximum 48 hours per week), overtime, leave entitlements, and termination procedures including advance notice and severance pay.",
            "Foreign workers must obtain a work permit from the Department of Employment under the Ministry of Labour. Work permits are issued for specific employers and job positions. The Foreign Business Act and related regulations also govern which occupations are reserved for Thai nationals.",
            "Thailand has a minimum wage system with rates varying by province. Employers and employees must contribute to the Social Security Fund, which provides coverage for illness, maternity, disability, death, child allowance, old age, and unemployment benefits."
        ],
        "ip": [
            "Thailand has a comprehensive intellectual property protection framework administered by the Department of Intellectual Property (DIP) under the Ministry of Commerce. The legal framework covers trademarks, patents, petty patents, industrial designs, copyright, trade secrets, and geographical indications.",
            "Thailand is a member of WIPO and party to major international IP treaties including the Paris Convention, the Berne Convention, the PCT, and the TRIPS Agreement. The country's trademark system follows a first-to-file principle with multi-class filing capability.",
            "As one of our core practice areas since 1986, Dej-Udom and Associates provides comprehensive IP services in Thailand including prosecution, enforcement, licensing, and strategic portfolio management. Our team has extensive experience before the DIP, the Board of Patents, the Central Intellectual Property and International Trade Court, and customs authorities."
        ],
        "investment": [
            "Foreign investment in Thailand is facilitated by the Board of Investment (BOI) under the Investment Promotion Act B.E. 2520 (1977). The BOI offers promotion certificates for qualifying activities in targeted industries, providing significant incentives including tax holidays, import duty exemptions, and permission for majority or full foreign ownership.",
            "The Eastern Economic Corridor (EEC) initiative focuses on developing the provinces of Chachoengsao, Chonburi, and Rayong as a hub for advanced industries including next-generation automotive, smart electronics, aviation and logistics, medical and wellness tourism, robotics, and biotechnology.",
            "Thailand's extensive free trade agreement network, industrial estate infrastructure, and well-developed supply chains make it a competitive base for manufacturing and regional operations. The government continues to promote the Thailand 4.0 strategy aimed at transitioning to a value-based and innovation-driven economy."
        ],
        "dna_help": [
            "As our home market since 1986, Dej-Udom and Associates provides direct, full-service legal representation in Thailand across all practice areas. Our Bangkok-based team delivers comprehensive legal solutions grounded in nearly four decades of experience.",
            "Our core practice areas in Thailand include intellectual property (prosecution, enforcement, licensing, and portfolio management), immigration (work permits, visas, and corporate immigration programs), corporate and commercial law (company formation, M and A, joint ventures, and regulatory compliance), litigation, mediation, and alternative dispute resolution, and notarial services.",
            "We serve as the Thailand member of the ASEAN Attorneys Alliance, coordinating with our network partners across the region to provide seamless cross-border legal services for multinational clients operating throughout ASEAN."
        ]
    },
    {
        "slug": "timor-leste",
        "name": "Timor-Leste",
        "flag": "&#x1F1F9;&#x1F1F1;",
        "capital": "Dili",
        "legal_system": "Civil law",
        "home": False,
        "overview": [
            "The Democratic Republic of Timor-Leste (East Timor) is a young nation that gained full independence in 2002, making it one of the newest countries in Asia. Located on the eastern half of the island of Timor and the enclave of Oecusse, Timor-Leste has a population of approximately 1.3 million. Timor-Leste became a member of ASEAN in 2022.",
            "The economy is heavily dependent on petroleum revenues from the Timor Sea, which have been managed through the Petroleum Fund, a sovereign wealth fund established to safeguard oil and gas revenues for future generations. The government has prioritized diversification into agriculture, tourism, and fisheries.",
            "Dili, the capital, serves as the country's primary commercial center and port. As the newest ASEAN member state, Timor-Leste is in the process of building its institutional and regulatory capacity to participate fully in regional economic integration."
        ],
        "legal_framework": [
            "Timor-Leste's legal system is based on the civil law tradition, drawing from Portuguese and Indonesian legal influences. The 2002 Constitution establishes the framework for democratic governance, fundamental rights, and the separation of powers.",
            "The court system includes the Court of Appeal (functioning as the supreme court until a Supreme Court of Justice is established), district courts, and military courts. The legal profession and judicial system are still developing, with ongoing capacity-building support from international organizations.",
            "Key legislation for business includes the Commercial Companies Law (2004), the Private Investment Law (2017), the Petroleum Activities Law, and the Labor Code (2012). The legal framework continues to evolve as new legislation is enacted to support economic development."
        ],
        "business_formation": [
            "Foreign investors may establish businesses in Timor-Leste through limited liability companies, sole proprietorships, branches of foreign companies, or representative offices. The limited liability company (Sociedade por Quotas or Sociedade Anonima) is the most common vehicle for foreign investment.",
            "Business registration is handled by the Business Registration and Verification Service (SERVE) under the Ministry of Justice. The government has worked to streamline the registration process, which can be completed within several business days.",
            "The Private Investment Law 2017 provides the framework for domestic and foreign private investment. The Trade Invest Timor-Leste (formerly IADE) serves as the investment promotion agency, facilitating market entry and supporting investors through the establishment process."
        ],
        "taxation": [
            "Timor-Leste's tax system is administered by the National Directorate of Domestic Revenue. The income tax regime applies a flat rate of 10 percent on taxable income for both individuals and companies, one of the simplest and lowest tax rates in the ASEAN region.",
            "A sales tax of 2.5 percent applies to the provision of goods and services. Import duties are levied at rates of 2.5 or 6 percent depending on the type of goods. Withholding taxes apply to certain payments including interest, royalties, dividends, and payments for services.",
            "Qualifying investments under the Private Investment Law may receive tax incentives including income tax and import duty exemptions. The petroleum sector is subject to separate taxation under the Petroleum Tax Law, with different rates and rules applying to petroleum operations."
        ],
        "employment": [
            "Employment in Timor-Leste is governed by the Labor Code of 2012 (Law No. 4/2012), which establishes employment standards including employment contracts, working hours (maximum 44 hours per week), overtime, leave entitlements, minimum wage, and termination procedures.",
            "Foreign workers require a work authorization issued by the State Secretariat for Vocational Training and Employment. Employment of foreign workers is generally permitted where the required skills are not available in the local labor force.",
            "Timor-Leste has a minimum wage applicable to the private sector. Social security legislation provides for contributions to cover employment-related risks, though the system is still in development. The government prioritizes skills development and training for the local workforce."
        ],
        "ip": [
            "Intellectual property protection in Timor-Leste is still in the early stages of development. The country has enacted the Industrial Property Law (Decree-Law No. 4/2012) covering trademarks, patents, utility models, and industrial designs, and the Copyright Law based on its civil law legal tradition.",
            "The National Directorate of Commerce under the Ministry of Commerce, Industry and Environment administers IP registrations. The trademark registration system is operational, though patent examination capacity is still being developed.",
            "As a new ASEAN member, Timor-Leste is working toward aligning its IP framework with ASEAN IP cooperation initiatives and international standards. Rights holders should consider protective registrations to secure their marks in this developing market."
        ],
        "investment": [
            "Foreign investment in Timor-Leste is governed by the Private Investment Law 2017, which replaced earlier investment legislation. The law establishes the framework for investment approvals, incentives, and investor protections. Trade Invest Timor-Leste serves as the investment promotion and facilitation agency.",
            "The government has identified priority sectors for investment including agriculture and agro-processing, fisheries, tourism, petroleum downstream activities, manufacturing, and infrastructure development. There are generally no restrictions on foreign ownership in most sectors, though land ownership is restricted to Timorese nationals.",
            "Investment incentives include income tax exemptions of up to 10 years for qualifying investments, import duty exemptions on capital goods and construction materials, and streamlined administrative procedures. The development of Special Economic Zones is under consideration to further attract foreign investment."
        ],
        "dna_help": [
            "Through the ASEAN Attorneys Alliance, Dej-Udom and Associates is building relationships with legal professionals in Timor-Leste to support clients interested in this emerging ASEAN market.",
            "Our services include preliminary market entry assessment, corporate structuring advisory, investment law guidance, regulatory compliance support, intellectual property registration, and coordination with local legal counsel for transactions and ongoing operations.",
            "As Timor-Leste continues to develop its legal and institutional framework as a new ASEAN member, our network provides access to up-to-date guidance on the evolving regulatory environment and practical considerations for doing business in this frontier market."
        ]
    },
    {
        "slug": "vietnam",
        "name": "Vietnam",
        "flag": "&#x1F1FB;&#x1F1F3;",
        "capital": "Hanoi",
        "legal_system": "Civil law (socialist)",
        "home": False,
        "overview": [
            "The Socialist Republic of Vietnam is one of the fastest-growing economies in Southeast Asia, with a population of approximately 100 million people. Driven by manufacturing, exports, foreign direct investment, and a dynamic domestic consumer market, Vietnam has emerged as a major destination for global supply chain diversification. Vietnam joined ASEAN in 1995.",
            "The country has successfully integrated into the global economy through an extensive network of free trade agreements, including the Comprehensive and Progressive Agreement for Trans-Pacific Partnership (CPTPP), the EU-Vietnam Free Trade Agreement (EVFTA), and the Regional Comprehensive Economic Partnership (RCEP).",
            "Hanoi is the political capital, while Ho Chi Minh City serves as the largest commercial and economic center. Other important economic zones include Hai Phong, Da Nang, Binh Duong, and Dong Nai, each hosting significant concentrations of industrial parks and export-oriented manufacturing facilities."
        ],
        "legal_framework": [
            "Vietnam's legal system is based on the civil law tradition within a socialist legal framework. The 2013 Constitution establishes the Communist Party as the leading force of the state and society, and provides the foundation for the legal system, citizens' rights, and economic organization.",
            "The court system includes the Supreme People's Court, high people's courts, provincial people's courts, and district people's courts. Vietnam also has the Vietnam International Arbitration Centre (VIAC) and other arbitration centers for commercial dispute resolution.",
            "Key commercial legislation includes the Enterprise Law (2020), the Investment Law (2020), the Civil Code (2015), the Labor Code (2019), the Intellectual Property Law (2005, amended 2009, 2019, and 2022), and the Law on Securities (2019). The regulatory framework is subject to frequent updates through implementing decrees and circulars."
        ],
        "business_formation": [
            "Foreign investors may establish businesses in Vietnam through limited liability companies (single-member or multi-member), joint stock companies, partnerships, or branches of foreign companies (limited to specific sectors). The limited liability company is the most commonly used vehicle for foreign direct investment.",
            "Company establishment requires registration with the provincial Department of Planning and Investment, which issues the Enterprise Registration Certificate (ERC) and simultaneously records investment registration for foreign-invested enterprises. The process typically takes 15 to 30 working days for standard applications.",
            "Vietnam's Investment Law 2020 sets out the conditions for market access by foreign investors, including a negative list of sectors where foreign investment is prohibited or conditionally permitted. Conditional sectors may require specific foreign ownership caps, licensing requirements, or other conditions."
        ],
        "taxation": [
            "Vietnam's tax system is administered by the General Department of Taxation under the Ministry of Finance. The standard corporate income tax rate is 20 percent. Preferential rates of 10 or 17 percent may apply to income from qualifying activities in promoted sectors or locations.",
            "Value-added tax (VAT) is levied at standard rates of 8 or 10 percent depending on the type of goods or services. A zero rate applies to exported goods and services. Withholding taxes apply to various cross-border payments including dividends, interest, royalties, and service fees.",
            "Vietnam offers extensive tax incentives for investment in encouraged sectors and disadvantaged regions, including tax holidays (up to four years of full exemption and up to nine years at 50 percent reduction), preferential tax rates, and import duty exemptions for capital goods and materials. Industrial zones, economic zones, and high-tech zones offer additional benefits."
        ],
        "employment": [
            "Employment in Vietnam is governed by the Labor Code 2019, which took effect on January 1, 2021. Key provisions cover employment contracts (definite-term, indefinite-term, and seasonal), working hours (maximum 48 hours per week), overtime limits, rest periods, annual leave, and termination procedures including notice requirements and severance pay.",
            "Foreign workers must obtain a work permit issued by the provincial Department of Labor, Invalids and Social Affairs (DOLISA). Work permits are generally valid for up to two years and may be extended. Certain categories of foreign workers may be exempt from the work permit requirement.",
            "Vietnam has a regional minimum wage system with rates varying by zone. Employers and employees must contribute to compulsory social insurance, health insurance, and unemployment insurance. Foreign employees holding work permits are also subject to compulsory social insurance contributions."
        ],
        "ip": [
            "Intellectual property in Vietnam is administered by the National Office of Intellectual Property (NOIP) for industrial property (trademarks, patents, industrial designs) and the Copyright Office of Vietnam for copyright. The Intellectual Property Law 2005, as amended in 2009, 2019, and 2022, provides the comprehensive legal framework.",
            "Vietnam is a member of WIPO and party to major international IP treaties including the Paris Convention, the PCT, the Madrid Protocol, the Berne Convention, and the Hague Agreement. Vietnam's CPTPP and EVFTA commitments have driven significant enhancements to its IP protection framework.",
            "IP enforcement has been strengthened through specialized IP enforcement units, enhanced customs measures, administrative enforcement by market management authorities, and civil litigation before the courts. The 2022 amendments to the IP Law introduced improved mechanisms for handling IP disputes and strengthened protection for trade secrets."
        ],
        "investment": [
            "Foreign investment in Vietnam is governed by the Investment Law 2020 and its implementing regulations, administered by the Ministry of Planning and Investment and its provincial departments. The law provides the framework for investment registration, licensing, incentives, and investor protections.",
            "Vietnam maintains a negative list approach, specifying sectors where foreign investment is prohibited (such as activities harmful to national defense or cultural heritage) and conditional sectors (where foreign ownership caps, licensing requirements, or other conditions apply). Most sectors are open to foreign investment.",
            "The government actively promotes investment through industrial zones, export processing zones, economic zones, and high-tech zones, each offering infrastructure, administrative support, and enhanced incentives. Vietnam's competitive labor costs, improving infrastructure, and FTA network continue to drive strong FDI inflows."
        ],
        "dna_help": [
            "Through the ASEAN Attorneys Alliance, Dej-Udom and Associates works closely with experienced Vietnamese law firms to provide comprehensive legal support for clients operating in or entering the Vietnamese market.",
            "Our coordinated services include company establishment and investment registration, mergers and acquisitions, commercial contract drafting and negotiation, employment law compliance, intellectual property prosecution and enforcement, regulatory advisory, and cross-border transaction support.",
            "Vietnam's rapidly evolving regulatory environment requires up-to-date local expertise. Our collaborative approach combines the deep local knowledge of our Vietnamese alliance partners with our firm's regional perspective and cross-border capabilities, ensuring consistent, high-quality legal guidance for multinational clients."
        ]
    },
]

SECTIONS = [
    ("overview", "Overview"),
    ("legal_framework", "Legal Framework"),
    ("business_formation", "Business Formation"),
    ("taxation", "Taxation"),
    ("employment", "Employment Law"),
    ("ip", "Intellectual Property"),
    ("investment", "Foreign Investment"),
    ("dna_help", "How D&A Can Help"),
]


def generate_country_page(country):
    slug = country["slug"]
    name = html.escape(country["name"])
    flag = country["flag"]
    capital = html.escape(country["capital"])
    legal_system = html.escape(country["legal_system"])
    is_home = country["home"]

    # Build TOC HTML
    toc_items = ""
    for key, label in SECTIONS:
        toc_items += f'            <a href="#{key}" class="toc-link">{label}</a>\n'

    # Build content sections
    content_sections = ""
    for key, label in SECTIONS:
        paragraphs = country[key]
        paras_html = "\n".join(f"          <p>{html.escape(p)}</p>" for p in paragraphs)
        content_sections += f"""
        <section id="{key}" class="guide-section">
          <h2>{label}</h2>
{paras_html}
        </section>
"""

    home_badge = ""
    if is_home:
        home_badge = '<span class="home-badge">HOME MARKET</span>'

    page_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Doing Business in {name} &mdash; Dej-Udom &amp; Associates</title>
<meta name="description" content="Business guide for {name}: legal framework, business formation, taxation, employment law, IP protection, and foreign investment regulations. Coordinated guidance through the ASEAN Attorneys Alliance.">

<!-- Open Graph -->
<meta property="og:title" content="Doing Business in {name} &mdash; Dej-Udom &amp; Associates">
<meta property="og:description" content="Legal framework, business formation, taxation, employment law, IP protection, and foreign investment guide for {name}.">
<meta property="og:type" content="article">
<meta property="og:url" content="https://www.dejudomlaw.com/asean/{slug}.html">
<meta property="og:site_name" content="Dej-Udom &amp; Associates">
<meta property="og:locale" content="en_US">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="Doing Business in {name} &mdash; Dej-Udom &amp; Associates">
<meta name="twitter:description" content="Business guide for {name} covering legal framework, business formation, taxation, and more.">

<!-- Structured Data -->
<script type="application/ld+json">
{{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Doing Business in {name}",
  "description": "Comprehensive business guide for {name} covering legal framework, business formation, taxation, employment law, intellectual property, and foreign investment.",
  "url": "https://www.dejudomlaw.com/asean/{slug}.html",
  "publisher": {{
    "@type": "LegalService",
    "name": "Dej-Udom & Associates Ltd.",
    "url": "https://www.dejudomlaw.com"
  }},
  "about": {{
    "@type": "Country",
    "name": "{name}"
  }}
}}
</script>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet">
<style>
  /* ===== CUSTOM PROPERTIES ===== */
  :root {{
    --forest: #0a1a0f;
    --forest-deep: #050d08;
    --forest-mid: #0f2918;
    --emerald: #1a7a3a;
    --emerald-dim: #145a2a;
    --gold: #d4a853;
    --gold-light: #e0c07a;
    --gold-muted: rgba(212, 168, 83, 0.15);
    --cream: #f5f2ec;
    --warm-white: #faf8f5;
    --text-primary: #e8e4dd;
    --text-secondary: rgba(232, 228, 221, 0.55);
    --text-muted: rgba(232, 228, 221, 0.3);
    --border-subtle: rgba(255, 255, 255, 0.06);
    --border-light: rgba(255, 255, 255, 0.1);
    --glass: rgba(10, 26, 15, 0.65);
    --glass-border: rgba(255, 255, 255, 0.08);
    --radius: 12px;
    --radius-sm: 6px;
    --radius-lg: 20px;
  }}

  /* ===== RESET & BASE ===== */
  *, *::before, *::after {{ margin: 0; padding: 0; box-sizing: border-box; }}
  html {{ scroll-behavior: smooth; }}

  body {{
    font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
    background: var(--forest-deep);
    color: var(--text-primary);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }}

  h1, h2, h3, h4 {{
    font-family: 'Libre Baskerville', Georgia, serif;
    font-weight: 400;
    letter-spacing: -0.2px;
  }}

  /* ===== LANGUAGE-SPECIFIC FONTS ===== */
  body.lang-th {{ font-family: 'Noto Sans Thai', 'Plus Jakarta Sans', -apple-system, sans-serif; }}
  body.lang-th h1, body.lang-th h2, body.lang-th h3, body.lang-th h4 {{ font-family: 'Noto Sans Thai', 'Libre Baskerville', Georgia, serif; }}
  body.lang-zh {{ font-family: 'Noto Sans SC', 'Plus Jakarta Sans', -apple-system, sans-serif; }}
  body.lang-zh h1, body.lang-zh h2, body.lang-zh h3, body.lang-zh h4 {{ font-family: 'Noto Sans SC', 'Libre Baskerville', Georgia, serif; }}

  /* ===== NOISE TEXTURE OVERLAY ===== */
  body::after {{
    content: '';
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.025;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 256px 256px;
  }}

  /* ===== FOCUS INDICATORS ===== */
  button:focus-visible, a:focus-visible, [tabindex]:focus-visible {{
    outline: 2px solid var(--gold);
    outline-offset: 3px;
  }}

  /* ===== SCROLL-DRIVEN REVEAL ANIMATIONS ===== */
  .reveal {{
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }}
  .reveal.visible {{
    opacity: 1;
    transform: translateY(0);
  }}
  .reveal-delay-1 {{ transition-delay: 0.1s; }}
  .reveal-delay-2 {{ transition-delay: 0.2s; }}

  /* ===== CUSTOM CURSOR ===== */
  .cursor-dot {{
    position: fixed;
    width: 8px;
    height: 8px;
    background: var(--gold);
    border-radius: 50%;
    pointer-events: none;
    z-index: 10000;
    transition: transform 0.15s ease, opacity 0.15s ease;
    mix-blend-mode: difference;
  }}
  .cursor-ring {{
    position: fixed;
    width: 36px;
    height: 36px;
    border: 1.5px solid var(--gold);
    border-radius: 50%;
    pointer-events: none;
    z-index: 10000;
    transition: transform 0.3s ease, width 0.3s ease, height 0.3s ease, border-color 0.3s ease;
    opacity: 0.5;
  }}
  .cursor-ring.hover {{
    width: 56px;
    height: 56px;
    border-color: var(--gold-light);
    opacity: 0.3;
  }}

  @media (pointer: coarse) {{
    .cursor-dot, .cursor-ring {{ display: none; }}
  }}

  /* ===== NAVIGATION ===== */
  nav {{
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }}
  nav.scrolled {{
    background: rgba(5, 13, 8, 0.85);
    backdrop-filter: blur(24px) saturate(1.4);
    -webkit-backdrop-filter: blur(24px) saturate(1.4);
    border-bottom: 1px solid var(--border-subtle);
  }}
  .nav-inner {{
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 48px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: height 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }}
  nav.scrolled .nav-inner {{ height: 64px; }}
  .nav-logo {{
    display: flex;
    flex-direction: column;
    text-decoration: none;
    gap: 3px;
  }}
  .nav-logo-name {{
    font-family: 'Libre Baskerville', serif;
    font-size: 22px;
    font-weight: 400;
    color: white;
    letter-spacing: 0.3px;
    line-height: 1;
  }}
  .nav-logo-sub {{
    font-family: 'Libre Baskerville', serif;
    font-size: 11px;
    color: var(--text-secondary);
    letter-spacing: 2.5px;
    font-weight: 400;
    text-align: center;
  }}
  .nav-links {{
    display: flex;
    gap: 40px;
    list-style: none;
  }}
  .nav-links a {{
    font-size: 13px;
    font-weight: 400;
    color: var(--text-secondary);
    text-decoration: none;
    letter-spacing: 0.3px;
    position: relative;
    transition: color 0.3s;
  }}
  .nav-links a::after {{
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--gold);
    transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }}
  .nav-links a:hover {{ color: var(--text-primary); }}
  .nav-links a:hover::after {{ width: 100%; }}
  .nav-contact-btn {{
    font-size: 12px;
    font-weight: 600;
    color: var(--forest);
    background: var(--gold);
    text-decoration: none;
    padding: 10px 28px;
    border-radius: 100px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    overflow: hidden;
  }}
  .nav-contact-btn::before {{
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: var(--gold-light);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    border-radius: inherit;
  }}
  .nav-contact-btn:hover::before {{
    transform: scaleX(1);
    transform-origin: left;
  }}
  .nav-contact-btn span {{
    position: relative;
    z-index: 1;
  }}
  .nav-menu-btn {{
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    flex-direction: column;
    gap: 6px;
  }}
  .nav-menu-btn span {{
    display: block;
    width: 24px;
    height: 1.5px;
    background: var(--text-primary);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    transform-origin: center;
  }}
  .nav-menu-btn.active span:nth-child(1) {{ transform: rotate(45deg) translate(5px, 5px); }}
  .nav-menu-btn.active span:nth-child(2) {{ opacity: 0; }}
  .nav-menu-btn.active span:nth-child(3) {{ transform: rotate(-45deg) translate(5px, -5px); }}

  .lang-switcher {{ display: flex; gap: 4px; margin-right: 16px; padding: 3px; background: rgba(255,255,255,0.04); border-radius: 8px; border: 1px solid var(--border-subtle); }}
  .lang-option {{ font-family: 'Plus Jakarta Sans', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.5px; padding: 6px 10px; border: none; border-radius: 6px; background: transparent; color: var(--text-muted); cursor: pointer; transition: all 0.3s ease; }}
  .lang-option:hover {{ color: var(--text-secondary); background: rgba(255,255,255,0.04); }}
  .lang-option.active {{ color: var(--forest); background: var(--gold); }}

  .nav-links.mobile-open {{
    display: flex !important;
    flex-direction: column;
    position: absolute;
    top: 80px; left: 0; right: 0;
    background: rgba(5, 13, 8, 0.97);
    backdrop-filter: blur(24px);
    padding: 32px 48px;
    gap: 24px;
    border-bottom: 1px solid var(--border-subtle);
    animation: slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }}

  @keyframes slideDown {{
    from {{ opacity: 0; transform: translateY(-12px); }}
    to {{ opacity: 1; transform: translateY(0); }}
  }}

  /* ===== BREADCRUMB ===== */
  .breadcrumb {{
    max-width: 1400px;
    margin: 0 auto;
    padding: 120px 48px 0;
    font-size: 13px;
    color: var(--text-muted);
  }}
  .breadcrumb a {{
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s;
  }}
  .breadcrumb a:hover {{
    color: var(--gold);
  }}
  .breadcrumb span {{
    margin: 0 8px;
    color: var(--text-muted);
  }}

  /* ===== COUNTRY HEADER ===== */
  .country-header {{
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 48px 60px;
    text-align: center;
  }}
  .country-header-flag {{
    font-size: 5rem;
    display: block;
    margin-bottom: 16px;
  }}
  .country-header h1 {{
    font-size: 42px;
    color: white;
    margin-bottom: 8px;
  }}
  .country-header-subtitle {{
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: var(--gold);
    font-family: 'Plus Jakarta Sans', sans-serif;
  }}
  .home-badge {{
    display: inline-block;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: var(--forest);
    background: var(--gold);
    padding: 4px 14px;
    border-radius: 100px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    margin-top: 12px;
  }}
  .country-meta {{
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-top: 24px;
    font-size: 14px;
    color: var(--text-secondary);
  }}
  .country-meta strong {{
    color: var(--text-primary);
    font-weight: 500;
  }}

  /* ===== GUIDE LAYOUT ===== */
  .guide-layout {{
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 48px 80px;
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 60px;
    align-items: start;
  }}

  /* ===== TABLE OF CONTENTS ===== */
  .toc {{
    position: sticky;
    top: 100px;
    padding: 24px 0;
  }}
  .toc-title {{
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--text-muted);
    margin-bottom: 16px;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }}
  .toc-link {{
    display: block;
    font-size: 13px;
    color: var(--text-secondary);
    text-decoration: none;
    padding: 8px 0;
    border-left: 2px solid var(--border-subtle);
    padding-left: 16px;
    transition: all 0.3s ease;
  }}
  .toc-link:hover {{
    color: var(--gold);
    border-left-color: var(--gold);
  }}
  .toc-link.active {{
    color: var(--gold);
    border-left-color: var(--gold);
    font-weight: 500;
  }}

  /* ===== GUIDE CONTENT ===== */
  .guide-content {{
    max-width: 800px;
  }}
  .guide-section {{
    margin-bottom: 56px;
    scroll-margin-top: 100px;
  }}
  .guide-section h2 {{
    font-size: 28px;
    color: var(--gold);
    margin-bottom: 24px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border-subtle);
  }}
  .guide-section p {{
    font-size: 15px;
    line-height: 1.85;
    color: var(--text-primary);
    margin-bottom: 16px;
  }}
  .guide-section p:last-child {{
    margin-bottom: 0;
  }}

  /* ===== BACK LINK ===== */
  .back-link {{
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: var(--gold);
    text-decoration: none;
    margin-top: 40px;
    padding: 12px 24px;
    border: 1px solid var(--gold-muted);
    border-radius: var(--radius);
    transition: all 0.3s ease;
  }}
  .back-link:hover {{
    background: var(--gold-muted);
    border-color: var(--gold);
  }}

  /* ===== MOBILE TOC ===== */
  .toc-mobile-toggle {{
    display: none;
    width: 100%;
    padding: 14px 20px;
    background: var(--glass);
    border: 1px solid var(--border-light);
    border-radius: var(--radius);
    color: var(--text-primary);
    font-size: 14px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 500;
    cursor: pointer;
    margin-bottom: 24px;
    text-align: left;
  }}
  .toc-mobile-toggle::after {{
    content: '\\25BC';
    float: right;
    font-size: 10px;
    transition: transform 0.3s;
  }}
  .toc-mobile-toggle.open::after {{
    transform: rotate(180deg);
  }}

  /* ===== FOOTER ===== */
  footer {{
    background: var(--forest-deep);
    border-top: 1px solid var(--border-subtle);
    padding: 80px 48px 40px;
  }}
  .footer-inner {{
    max-width: 1400px;
    margin: 0 auto;
  }}
  .footer-grid {{
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 60px;
    padding-bottom: 60px;
    border-bottom: 1px solid var(--border-subtle);
  }}
  .footer-brand-name {{
    font-family: 'Libre Baskerville', serif;
    font-size: 22px;
    color: white;
    font-weight: 500;
    margin-bottom: 4px;
  }}
  .footer-brand-sub {{
    font-size: 9px;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 24px;
  }}
  .footer-desc {{
    font-size: 14px;
    color: var(--text-muted);
    line-height: 1.7;
    max-width: 320px;
  }}
  .footer-col h4 {{
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--text-muted);
    margin-bottom: 24px;
    font-family: 'Plus Jakarta Sans', sans-serif;
  }}
  .footer-col a {{
    display: block;
    font-size: 14px;
    color: var(--text-secondary);
    text-decoration: none;
    padding: 6px 0;
    transition: all 0.3s;
  }}
  .footer-col a:hover {{
    color: var(--gold);
    transform: translateX(4px);
  }}
  .footer-bottom {{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 32px;
  }}
  .footer-copy {{
    font-size: 12px;
    color: var(--text-muted);
  }}
  .footer-legal {{
    display: flex;
    gap: 24px;
  }}
  .footer-legal a {{
    font-size: 12px;
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.2s;
  }}
  .footer-legal a:hover {{ color: var(--text-secondary); }}

  /* ===== RESPONSIVE ===== */
  @media (max-width: 1024px) {{
    .guide-layout {{ grid-template-columns: 1fr; gap: 0; }}
    .toc {{ position: static; padding: 0 0 24px; }}
    .toc-mobile-toggle {{ display: block; }}
    .toc-links {{ display: none; }}
    .toc-links.open {{ display: block; padding-bottom: 16px; }}
    .footer-grid {{ grid-template-columns: 1fr 1fr; }}
  }}

  @media (max-width: 768px) {{
    .nav-links {{ display: none; }}
    .nav-menu-btn {{ display: flex; }}
    .nav-inner {{ padding: 0 24px; }}
    .breadcrumb {{ padding: 100px 24px 0; }}
    .country-header {{ padding: 24px 24px 40px; }}
    .country-header h1 {{ font-size: 30px; }}
    .country-header-flag {{ font-size: 3.5rem; }}
    .country-meta {{ flex-direction: column; gap: 8px; }}
    .guide-layout {{ padding: 0 24px 60px; }}
    .guide-section h2 {{ font-size: 22px; }}
    .footer-grid {{ grid-template-columns: 1fr; gap: 32px; }}
    .footer-bottom {{ flex-direction: column; gap: 12px; }}
  }}
</style>
</head>
<body style="opacity:0;transition:opacity .3s">

<!-- Custom Cursor -->
<div class="cursor-dot"></div>
<div class="cursor-ring"></div>

<!-- ===== NAV ===== -->
<nav>
  <div class="nav-inner">
    <a href="../index.html" class="nav-logo">
      <span class="nav-logo-name">Dej-Udom &amp; Associates</span>
      <span class="nav-logo-sub" data-i18n="common.nav.subtitle">Attorneys At Law</span>
    </a>
    <ul class="nav-links">
      <li><a href="../index.html" data-i18n="common.nav.home">Home</a></li>
      <li><a href="../DA About Us 2026.html" data-i18n="common.nav.about">About</a></li>
      <li><a href="../index.html#practices" data-i18n="common.nav.expertise">Expertise</a></li>
      <li><a href="../DA Insights 2026.html" data-i18n="common.nav.insights">Insights</a></li>
      <li><a href="../DA Careers 2026.html" data-i18n="common.nav.careers">Careers</a></li>
    </ul>
    <div class="lang-switcher">
      <button class="lang-option active" data-lang="en" title="English">EN</button>
      <button class="lang-option" data-lang="th" title="\\u0e20\\u0e32\\u0e29\\u0e32\\u0e44\\u0e17\\u0e22">TH</button>
      <button class="lang-option" data-lang="zh-CN" title="\\u4e2d\\u6587">CN</button>
    </div>
    <a href="../index.html#contact" class="nav-contact-btn magnetic-wrap"><span data-i18n="common.nav.contact">Contact</span></a>
    <button class="nav-menu-btn" aria-label="Open menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- ===== BREADCRUMB ===== -->
<div class="breadcrumb">
  <a href="../index.html">Home</a>
  <span>&rsaquo;</span>
  <a href="index.html">ASEAN Business Guides</a>
  <span>&rsaquo;</span>
  {name}
</div>

<!-- ===== COUNTRY HEADER ===== -->
<div class="country-header reveal">
  <span class="country-header-flag">{flag}</span>
  <h1>{name}</h1>
  <div class="country-header-subtitle">Business Guide</div>
  {home_badge}
  <div class="country-meta">
    <div><strong>Capital:</strong> {capital}</div>
    <div><strong>Legal System:</strong> {legal_system}</div>
  </div>
</div>

<!-- ===== GUIDE LAYOUT ===== -->
<div class="guide-layout">

  <!-- TABLE OF CONTENTS -->
  <aside class="toc">
    <button class="toc-mobile-toggle" id="tocToggle">Table of Contents</button>
    <div class="toc-links" id="tocLinks">
      <div class="toc-title">Contents</div>
{toc_items}    </div>
  </aside>

  <!-- CONTENT -->
  <div class="guide-content">
{content_sections}
    <a href="index.html" class="back-link">&larr; Back to ASEAN Business Guides</a>
  </div>

</div>

<!-- ===== FOOTER ===== -->
<footer>
  <div class="footer-inner">
    <div class="footer-grid">
      <div>
        <div class="footer-brand-name">Dej-Udom &amp; Associates</div>
        <div class="footer-brand-sub" data-i18n="common.footer.subtitle">Attorneys at Law</div>
        <p class="footer-desc" data-i18n="common.footer.address">Charn Issara Tower 1, 2nd Floor, 942/69 Rama IV Road, Suriyawong, Bangrak, Bangkok 10500, Thailand</p>
      </div>
      <div class="footer-col">
        <h4 data-i18n="common.footer.col_expertise">Expertise</h4>
        <a href="../index.html#practices" data-i18n="common.footer.link_ip">Intellectual Property</a>
        <a href="../index.html#practices" data-i18n-html="common.footer.link_immigration">Immigration</a>
        <a href="../index.html#practices" data-i18n-html="common.footer.link_corporate">Corporate &amp; Commercial</a>
        <a href="../index.html#practices" data-i18n-html="common.footer.link_litigation">Litigation, Mediation &amp; ADR</a>
        <a href="../index.html#practices" data-i18n="common.footer.link_notarial">Notarial Services</a>
      </div>
      <div class="footer-col">
        <h4 data-i18n="common.footer.col_firm">The Firm</h4>
        <a href="../DA About Us 2026.html#founder" data-i18n="common.footer.link_founder">Our Founder</a>
        <a href="../DA About Us 2026.html#team" data-i18n="common.footer.link_people">Our Team</a>
        <a href="../DA About Us 2026.html#publications" data-i18n="common.footer.link_publications">Publications</a>
        <a href="../DA Insights 2026.html" data-i18n="common.footer.link_insights">Insights</a>
      </div>
      <div class="footer-col">
        <h4 data-i18n="common.footer.col_connect">Connect</h4>
        <a href="../DA Careers 2026.html" data-i18n="common.footer.link_careers">Careers</a>
        <a href="../index.html#contact" data-i18n="common.footer.link_contact">Contact Us</a>
        <a href="tel:+6622330055">+66 2233 0055</a>
        <a href="mailto:dej-udom@dejudom.com">dej-udom@dejudom.com</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-copy" data-i18n-html="common.footer.copyright">&copy; 2026 Dej-Udom &amp; Associates. All rights reserved.</div>
      <div class="footer-legal">
        <a href="#" data-i18n="common.footer.privacy">Privacy Policy</a>
        <a href="#" data-i18n="common.footer.terms">Terms of Use</a>
      </div>
    </div>
  </div>
</footer>

<script>
  // Body fade-in
  document.body.style.opacity = '1';

  // Custom Cursor
  (function() {{
    if (window.matchMedia('(pointer: fine)').matches) {{
      const dot = document.querySelector('.cursor-dot');
      const ring = document.querySelector('.cursor-ring');
      let mx = 0, my = 0, rx = 0, ry = 0;
      document.addEventListener('mousemove', function(e) {{
        mx = e.clientX; my = e.clientY;
        dot.style.left = mx - 4 + 'px';
        dot.style.top = my - 4 + 'px';
      }});
      function animateRing() {{
        rx += (mx - rx) * 0.15;
        ry += (my - ry) * 0.15;
        ring.style.left = rx - 18 + 'px';
        ring.style.top = ry - 18 + 'px';
        requestAnimationFrame(animateRing);
      }}
      animateRing();
      document.querySelectorAll('a, button').forEach(function(el) {{
        el.addEventListener('mouseenter', function() {{ ring.classList.add('hover'); }});
        el.addEventListener('mouseleave', function() {{ ring.classList.remove('hover'); }});
      }});
    }}
  }})();

  // Nav scroll state
  window.addEventListener('scroll', function() {{
    document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 60);
  }});

  // Mobile menu toggle
  document.querySelector('.nav-menu-btn').addEventListener('click', function() {{
    this.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('mobile-open');
  }});

  // Mobile TOC toggle
  document.getElementById('tocToggle').addEventListener('click', function() {{
    this.classList.toggle('open');
    document.getElementById('tocLinks').classList.toggle('open');
  }});

  // Reveal on scroll
  const revealObserver = new IntersectionObserver(function(entries) {{
    entries.forEach(function(entry) {{
      if (entry.isIntersecting) {{
        entry.target.classList.add('visible');
      }}
    }});
  }}, {{ threshold: 0.1, rootMargin: '0px 0px -40px 0px' }});

  document.querySelectorAll('.reveal').forEach(function(el) {{
    revealObserver.observe(el);
  }});

  // TOC active state on scroll
  (function() {{
    const sections = document.querySelectorAll('.guide-section');
    const tocLinks = document.querySelectorAll('.toc-link');

    function updateActive() {{
      let current = '';
      sections.forEach(function(section) {{
        const top = section.offsetTop - 140;
        if (window.scrollY >= top) {{
          current = section.getAttribute('id');
        }}
      }});
      tocLinks.forEach(function(link) {{
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {{
          link.classList.add('active');
        }}
      }});
    }}

    window.addEventListener('scroll', updateActive);
    updateActive();
  }})();
</script>

<script src="../i18n/i18n.js"></script>

</body>
</html>"""

    filepath = os.path.join(SCRIPT_DIR, f"{slug}.html")
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(page_html)
    print(f"  Generated: {slug}.html")


def main():
    print(f"Generating {len(COUNTRIES)} ASEAN country pages...")
    for country in COUNTRIES:
        generate_country_page(country)
    print(f"\nDone! {len(COUNTRIES)} pages generated in {SCRIPT_DIR}/")


if __name__ == "__main__":
    main()
