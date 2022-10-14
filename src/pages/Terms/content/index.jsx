import React from 'react';
import {BackBtn} from "components";
import classes from './styles.module.scss';
import PageHeading from "../pageHeading";

const Content = () => {
    return (
        <div className={classes.wrapper}>
            <BackBtn/>
            <p className={classes.text}>Latest update:  March 2022</p>
            <PageHeading/>
            <div>
                <p className={classes.text}>Please read these terms carefully and keep a copy of them for your reference. Please also note that there may be specific terms or conditions applicable to you as a user in a given jurisdiction, as detailed below.</p>
                <br/>
                <br/>
                <h3 className={classes.heading}>AGREEMENT TO TERMS</h3>
                <br/>
                <br/>
                <p className={classes.text}>This End User License Agreement and Terms of Service (“EULA” or “Terms”) is a binding contract between you, an individual user or site visitor, whether personally or on behalf of an entity (“user,” “you,” “your”) and the Qi Foundation (the “Foundation,” “we,” “us” or “our”) concerning use of the Foundation’s services (the “Service”), including the www.blockchain.online website as well as any other media form, media channel, or mobile website related, linked, or otherwise connected thereto (collectively, the “Site”). Currently, the Foundation maintains and operates www.qiblockchain.online as a portal for news, information, and updates about the Qi protocol or blockchain (the “Qi Network”) and the Qi ecosystem. For the avoidance of doubt, the Foundation does not control the Qi Network and cannot control activity and data on the Qi Network, the activities of persons who develop and use applications on the Network, the validation of transactions on the Qi Network, or use of the Qi Network. The Network is an open-source protocol that is maintained and processed by Qi Network validators across the globe.</p>
                <br/>
                <br/>
                <p className={classes.text}>BY ACCESSING OR USING THE SERVICE, YOU AGREE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THE EULA. IF YOU DO NOT AGREE, PLEASE DO NOT USE THE SERVICE OR SITE.</p>
                <br/>
                <br/>
                <p className={classes.text}>Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to this EULA at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of the EULA, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review the EULA to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised EULA by your continued use of the Service after the date such revised EULA is posted.</p>
                <br/>
                <br/>
                <p className={classes.text}>The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</p>
                <br/>
                <br/>
                <p className={classes.text}>The Service is intended for users who are at least 18 years old. You agree that by using the Site and the Service you are at least 18 years of age, or accessing the Service under the supervision of a parent or guardian, and you are legally able to enter into a contract. If you are a parent or legal guardian of a user under the age of 18 (or the age of legal majority), you agree to be fully responsible for the acts or omissions of such user in relation to the Service. If you use the Service on behalf of another person or entity, (a) all references to “you” throughout the EULA will include that person or entity, (b) you represent that you are authorized to accept these Terms on that person’s or entity’s behalf, and (c) in the event you or the person or entity violates these Terms, the person or entity agrees to be responsible to us.</p>
                <br/>
                <br/>
                <h3 className={classes.heading}>SCOPE OF LICENSE TO USERS</h3>
                <br/>
                <br/>
                <p className={classes.text}>The Service is licensed, not sold, to you for use only under the terms of the EULA, subject to your complete and ongoing compliance with the terms and conditions of the EULA. The Foundation hereby grants you a personal, limited, revocable, non-transferable license to access and use the Service solely for your own use.</p>
                <br/>
                <br/>
                <p className={classes.text}>You may not modify, alter, reproduce, or distribute the Service. You may not directly rent, lease, lend, sell, redistribute or sublicense the Service. You may not copy, decompile, reverse engineer, disassemble, attempt to derive the source code of, modify, or create derivative works of any portion of the Service, any updates, or any part thereof (except as and only to the extent any foregoing restriction is prohibited by applicable law), nor attempt to disable or circumvent any security or other technological measure designed to protect the Service or any content available through the Service. If you breach these license restrictions, or otherwise exceed the scope of the licenses granted in the EULA, then you may be subject to prosecution and damages, as well as liability for infringement of intellectual property rights, and denial of access to the Service.</p>
                <br/>
                <br/>
                <p className={classes.text}>WITHOUT LIMITING ANY OTHER PROVISION OF THIS EULA, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THIS EULA OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION. If we terminate or suspend your access to the Site for any reason, you are prohibited from attempting to access the Site under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your access, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</p>
                <br/>
                <br/>
                <h3 className={classes.heading}>PROHIBITED ACTIVITIES</h3>
                <br/>
                <br/>
                <p className={classes.text}>You may not access or use the Service for any purpose other than that for which we make the Service available. The Service may not be used in connection with any commercial endeavours except those that are specifically endorsed or approved by us.</p>
                <br/>
                <br/>
                <p className={classes.text}>As a user of the Service, you agree not to:</p>
                <br/>
                <ul className={classes.list}>
                    <li className={classes.text}>Systematically retrieve data or other content from the Service to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                    <li className={classes.text}>Make any unauthorized use of the Service, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
                    <li className={classes.text}>Circumvent, disable, or otherwise interfere with security-related features of the Service, including features that prevent or restrict the use or copying of any content or enforce limitations on the use of the Service and/or the content contained therein.</li>
                    <li className={classes.text}>Engage in unauthorized framing of or linking to the Site.</li>
                    <li className={classes.text}>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                    <li className={classes.text}>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
                    <li className={classes.text}>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
                    <li className={classes.text}>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site.</li>
                    <li className={classes.text}>Attempt to impersonate another user or person.</li>
                    <li className={classes.text}>Use any information obtained from the Site in order to harass, abuse, or harm another person.</li>
                    <li className={classes.text}>Use the Service as part of any effort to compete with us or otherwise use the Service and/or the content for any revenue-generating endeavour or commercial enterprise.</li>
                    <li className={classes.text}>Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site.</li>
                    <li className={classes.text}>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Service to you.</li>
                    <li className={classes.text}>Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site.</li>
                    <li className={classes.text}>Delete the copyright or other proprietary rights notice from any content.</li>
                    <li className={classes.text}>Copy or adapt the Site’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.</li>
                    <li className={classes.text}>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party’s uninterrupted use and enjoyment of the Service or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Service.</li>
                    <li className={classes.text}>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as “spyware” or “passive collection mechanisms” or “pcms”).</li>
                    <li className={classes.text}>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software.</li>
                    <li className={classes.text}>Disparage, tarnish, distribute hate speech/explicit content or otherwise harm, in our opinion, us, the Service and/or other users of the Service.</li>
                    <li className={classes.text}>Copy, reproduce, distribute, publicly perform or publicly display all or portions of our Service, except as expressly permitted by us or our licensors.</li>
                    <li className={classes.text}>Modify our Service, remove any proprietary rights notices or markings, or otherwise make any derivative works based upon our Service.</li>
                    <li className={classes.text}>Infringe any patent, trademark, trade secret, copyright or other intellectual or proprietary right of the Foundation or any third party.</li>
                    <li className={classes.text}>Use the Service in a manner inconsistent with any applicable laws or regulations.</li>
                </ul>
                <br/>
                <br/>
                <h3 className={classes.heading}>SITE MANAGEMENT</h3>
                <br/>
                <br/>
                <p className={classes.text}>We reserve the right, but not the obligation, to: (1) monitor the Site for violations of this EULA; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or this EULA, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (4) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site.</p>
                <br/>
                <br/>
                <h3 className={classes.heading}>TRADEMARKS</h3>
                <br/>
                <br/>
                <p className={classes.text}>“Qi” and our logos, our product or service names, our slogans and the look and feel of the Service are trademarks of the Foundation and may not be copied, imitated or used, in whole or in part, without our prior written permission, which may be obtained by emailing <a className={classes.email} href={'mailto:info@qiblockchain.online'}>info@qiblockchain.online</a>. All other trademarks, registered trademarks, product names and company names or logos mentioned on the Service are the property of their respective owners. Reference to any products, services, processes or other information by trade name, trademark, manufacturer, supplier or otherwise does not constitute or imply endorsement, sponsorship or recommendation by us.</p>
                <br/>
                <br/>
                <h3 className={classes.heading}>DISPUTE RESOLUTION</h3>
                <br/>
                <br/>
                <p className={classes.text}>**Please read the following section carefully because it requires you to arbitrate certain disputes and claims with the Foundation and limits the manner in which you can seek relief from us, unless you opt out of arbitration by following the instructions set forth below. No class or representative actions or arbitrations are allowed under this arbitration provision. **In addition, arbitration precludes you from suing in court or having a jury trial. **</p>
                <br/>
                <br/>
                <p className={classes.text}>(a) <span className={classes.highlight}>No Representative Actions. You and the Foundation agree that any dispute arising out of or related to this EULA or the Service is personal to you and the Foundation and that any dispute will be resolved solely through individual action, and will not be brought as a class arbitration, class action or any other type of representative proceeding.</span></p>
                <br/>
                <br/>
                <p className={classes.text}>(b) <span className={classes.highlight}>Arbitration of Disputes. You and the Foundation waive your rights to a jury trial and to have any other dispute arising out of or related to this EULA and the Service, including claims related to privacy and data security, (collectively, “Disputes”) resolved in court.</span> Instead, for any Dispute that you have against the Foundation you agree to first contact the Foundation and attempt to resolve the claim informally by sending a written notice of your claim (“Notice”) to the Foundation by email at <a className={classes.email} href={'mailto:info@qiblockchain.online'}>info@qiblockchain.online</a> or by certified mail addressed to Postnet Suite 109, Private Bag X504, Sinnoville, 0129. The Notice must (a) include your name, residence address, email address, and telephone number; (b) describe the nature and basis of the Dispute; and (c) set forth the specific relief sought. Our notice to you will be similar in form to that described above. If you and the Foundation cannot reach an agreement to resolve the Dispute within thirty (30) days after such Notice is received, then either party may submit the Dispute to binding arbitration administered by JAMS or, under the limited circumstances set forth above, in court. All Disputes submitted to JAMS will be resolved through confidential, binding arbitration before one arbitrator. Arbitration proceedings will be held in Pretoria, South Africa. You and the Foundation agree that Disputes will be held in accordance with the JAMS Streamlined Arbitration Rules and Procedures (“JAMS Rules”). The most recent version of the JAMS Rules are available on the JAMS website and are hereby incorporated by reference. You either acknowledge and agree that you have read and understand the JAMS Rules or waive your opportunity to read the JAMS Rules and waive any claim that the JAMS Rules are unfair or should not apply for any reason.</p>
                <br/>
                <br/>
                <p className={classes.text}>(c) You and the Foundation agree that these Terms affect interstate commerce and that the enforceability of this Section will be substantively and procedurally governed by the Federal Arbitration Act, 9 U.S.C. § 1, et seq. (the “FAA”), to the maximum extent permitted by applicable law. As limited by the FAA, these Terms and the JAMS Rules, the arbitrator will have exclusive authority to make all procedural and substantive decisions regarding any Dispute and to grant any remedy that would otherwise be available in court, including the power to determine the question of arbitrability. The arbitrator may conduct only an individual arbitration and may not consolidate more than one individual’s claims, preside over any type of class or representative proceeding or preside over any proceeding involving more than one individual.</p>
                <br/>
                <br/>
                <p className={classes.text}>(d) The arbitration will allow for the discovery or exchange of non-privileged information relevant to the Dispute. The arbitrator, the Foundation, and you will maintain the confidentiality of any arbitration proceedings, judgments and awards, including information gathered, prepared and presented for purposes of the arbitration or related to the Dispute(s) therein. The arbitrator will have the authority to make appropriate rulings to safeguard confidentiality, unless the law provides to the contrary. The duty of confidentiality does not apply to the extent that disclosure is necessary to prepare for or conduct the arbitration hearing on the merits, in connection with a court application for a preliminary remedy or in connection with a judicial challenge to an arbitration award or its enforcement, or to the extent that disclosure is otherwise required by law or judicial decision.</p>
                <br/>
                <br/>
                <p className={classes.text}>(e) You and the Foundation agree that for any arbitration you initiate, you will pay the filing fee (up to a maximum of $250 if you are a consumer), and the Foundation will pay the remaining JAMS fees and costs. For any arbitration initiated by the Foundation, the Foundation will pay all JAMS fees and costs. You and the Foundation agree that the Kanton of Pretoria shall have exclusive jurisdiction over any appeals and the enforcement of an arbitration award.</p>
                <br/>
                <br/>
                <p className={classes.text}>(f) <span className={classes.highlight}>Any Dispute must be filed within one year after the relevant claim arose; otherwise, the Dispute is permanently barred, which means that you and the Foundation will not have the right to assert the claim.</span></p>
                <br/>
                <br/>
                <p className={classes.text}>(g) <span className={classes.highlight}>You have the right to opt out of binding arbitration within 30 days of the date you first accepted the terms of this Section by mailing an opt-out notice to the Foundation.</span> In order to be effective, the opt-out notice must include your full name and address and clearly indicate your intent to opt out of binding arbitration. By opting out of binding arbitration, you are agreeing to resolve Disputes in accordance with the governing law and venue terms of this EULA.</p>
                <br/>
                <br/>
                <p className={classes.text}>(h) If any portion of this Section is found to be unenforceable or unlawful for any reason, (a) the unenforceable or unlawful provision shall be severed from these Terms; (b) severance of the unenforceable or unlawful provision shall have no impact whatsoever on the remainder of this Section or the parties’ ability to compel arbitration of any remaining claims on an individual basis pursuant to this Section; and (c) to the extent that any claims must therefore proceed on a class, collective, consolidated, or representative basis, such claims must be litigated in a civil court of competent jurisdiction and not in arbitration, and the parties agree that litigation of those claims shall be stayed pending the outcome of any individual claims in arbitration. Further, if any part of this Section is found to prohibit an individual claim seeking public injunctive relief, that provision will have no effect to the extent such relief is allowed to be sought out of arbitration, and the remainder of this Section will be enforceable.</p>
                <br/>
                <br/>
                <h3 className={classes.heading}>GOVERNING LAW AND VENUE</h3>
                <br/>
                <br/>
                <p className={classes.text}>Any dispute arising from these Terms and your use of the Service will be governed by and construed and enforced in accordance with the laws of South Africa. Any dispute between the parties that is not subject to arbitration will be resolved in Johannesburg, South Africa.</p>
                <br/>
                <br/>
                <h3 className={classes.heading}>CORRECTIONS</h3>
                <br/>
                <br/>
                <p className={classes.text}>There may be information on the Site that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice. The Foundation does not warrant that the content will be uninterrupted or error free or free of computer viruses, contaminants or other harmful items.</p>
                <br/>
                <br/>
                <h3 className={classes.heading}>DISCLAIMER</h3>
                <br/>
                <br/>
                <p className={classes.text}>THE SITE AND SERVICE IS PROVIDED ON AN “AS-IS” AND “AS-AVAILABLE” BASIS. TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE FOUNDATION WILL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM THE USE OF THE SITE OR SERVICE, INCLUDING, BUT NOT LIMITED TO INDIRECT, INCIDENTAL, PUNITIVE, EXEMPLARY, SPECIAL OR CONSEQUENTIAL DAMAGES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. YOU AGREE THAT YOUR USE OF THE SITE AND SERVICE WILL BE AT YOUR SOLE RISK. THE FOUNDATION IS NOT RESPONSIBLE FOR ANY DAMAGES OR LOSSES THAT RESULT FROM YOUR USE OF THE SERVICE, INCLUDING, BUT NOT LIMITED TO, YOUR USE OR INABILITY TO USE THE SERVICE; ANY CHANGES TO OR INACCESSIBILITY OR TERMINATION OF THE SERVICE; ANY DELAY, FAILURE, UNAUTHORIZED ACCESS TO, OR ALTERATION OF ANY TRANSMISSION OR DATA; ANY TRANSACTION OR AGREEMENT ENTERED INTO THROUGH THE SERVICE; ANY ACTIVITIES OR COMMUNICATIONS OF THIRD PARTIES; OR ANY DATA OR MATERIAL FROM A THIRD PERSON ACCESSED ON OR THROUGH THE SERVICES. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE OR SERVICE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE.</p>
                <br/>
                <br/>
                <p className={classes.text}>IF YOU ARE DISSATISFIED WITH THE SERVICE, YOU AGREE THAT YOUR SOLE AND EXCLUSIVE REMEDY SHALL BE FOR YOU TO DISCONTINUE YOUR USE OF THE SERVICE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION AND EXCLUSIONS MAY NOT APPLY TO YOU.</p>
                <br/>
                <br/>
                <p className={classes.text}>The Foundation may link to products and services offered by third parties through the Service. These third-party products and services are not offered by the Foundation and the Foundation is not responsible for any damages or losses that you might incur as a result of your use or purchase of these products and services.</p>
                <br/>
                <br/>
                <p className={classes.text}>You shall and hereby do waive California Civil Code Section 1542 or any other similar law of any jurisdiction, which says in substance: “A general release does not extend to claims which the creditor does not know or suspect to exist in his favor at the time of executing the release, which, if known by him must have materially affected his settlement with the debtor.” Some jurisdictions do not allow the exclusion of implied warranties, so the above exclusion may not apply to you. You may have other rights which vary from jurisdiction to jurisdiction.</p>
                <br/>
                <br/>
                <h3 className={classes.heading}>INDEMNIFICATION</h3>
                <br/>
                <br/>
                <p className={classes.text}>You hereby agree to defend, indemnify, and hold the Foundation harmless from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) use of the Service; (2) breach of this EULA; (3) any breach of your representations and warranties set forth in this EULA; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; (5) any overt harmful act toward any other user of the Service with whom you connected via the Service; or (6) any breach of, or failure to comply with, applicable law. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.</p>
                <br/>
                <br/>
                <h3 className={classes.heading}>MODIFYING AND TERMINATING OUR SERVICE</h3>
                <br/>
                <br/>
                <p className={classes.text}>We reserve the right to modify our Service or to suspend or stop providing all or portions of our Service at any time. You also have the right to stop using our Service at any time. We are not responsible for any loss or harm related to your inability to access or use our Service.</p>
                <br/>
                <br/>
                <h3 className={classes.heading}>USER DATA</h3>
                <br/>
                <br/>
                <p className={classes.text}>We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.</p>
                <br/>
                <br/>
                <h3 className={classes.heading}>ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h3>
                <br/>
                <br/>
                <p className={classes.text}>You agree and consent to receive disclosures and communications from us regarding our services (“Communications”), including, but not limited to:</p>
                <br/>
                <br/>
                <ul className={classes.list}>
                    <li className={classes.text}>Terms and conditions of service, and amendments thereto;</li>
                    <li className={classes.text}>Privacy policies and notices, and amendments thereto;</li>
                    <li className={classes.text}>Client agreements and receipts;</li>
                    <li className={classes.text}>Legal and regulatory disclosures and communications;</li>
                    <li className={classes.text}>Customer service communications.</li>
                </ul>
                <br/>
                <br/>
                <p className={classes.text}>We may provide Communications to you by email or by making them accessible on the Site or through email (including via “hyperlinks” provided online and in emails). We may always, in our sole discretion, provide you with any Communication via paper.</p>
                <br/>
                <br/>
                <p className={classes.text}>Visiting the Site, sending us emails, and completing online forms constitute Communications. You consent to receive Communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.</p>
                <br/>
                <br/>
                <p className={classes.text}><i>Withdrawal of Consent</i></p>
                <br/>
                <br/>
                <p className={classes.text}>You may withdraw your consent to receive Communications under this EULA by contacting us at <a className={classes.email} href={'http://www.qiblockchain.online/'} target={'_blank'}>www.qiblockchain.online</a>. We will process your request to withdraw your consent to receive electronic Communications in a reasonable time. After we process your request, your access and use of the Service will terminate.</p>
                <br/>
                <br/>
                <p className={classes.text}><i>Requesting Paper Copies</i></p>
                <br/>
                <br/>
                <p className={classes.text}>You may request that we mail a paper copy of any electronic Communication by contacting us at <a className={classes.email} href={'mailto:info@qiblockchain.online'}>info@qiblockchain.online</a>. We may charge you fees associated with processing and mailing your request. We will send a copy of the Communication to you within a reasonable timeframe.</p>
                <br/>
                <br/>
                <p className={classes.text}><i>Termination and Changes</i></p>
                <br/>
                <br/>
                <p className={classes.text}>We reserve the right, in our sole discretion, to discontinue the provision of your Communications, or to terminate or change the terms and conditions on which we provide Communications. We will provide you with notice of any such termination or change as required by law.</p>
                <br/>
                <br/>
                <h3 className={classes.heading}>MISCELLANEOUS</h3>
                <br/>
                <br/>
                <p className={classes.text}>This EULA and any policies or operating rules posted by us on the Site or in respect to the Service constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of this EULA shall not operate as a waiver of such right or provision. This EULA operates to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of this EULA is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from this EULA and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of this EULA or use of the Service. You agree that this EULA will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of this EULA and the lack of signing by the parties hereto to execute this EULA.</p>
                <br/>
                <br/>
                <h3 className={classes.heading}>CONTACT US</h3>
                <br/>
                <br/>
                <p className={classes.text}>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Service, please contact us at: <a className={classes.email} href={'mailto:info@qiblockchain.online'}>info@qiblockchain.online</a></p>
            </div>
        </div>
    );
};

export default Content;