import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, Globe, Facebook, Instagram, Twitter, Sparkles, Shield, Clock } from "lucide-react";

const ContactSection = () => {

  return (
    <section id="contact-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Secure Your Spot
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-fade-in-delay">
            Ready to join Nigeria's most exclusive investor network? 
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay-2">
            Contact us today to secure your spot at these premium networking events.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 card-gradient border-border/50 hover-lift">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-foreground">
                Reserve Your Seat
              </h3>
            </div>
            
            <form 
              action="https://app.mailingboss.com/lists/68f106fb034fd/subscribe" 
              method="post"
              className="space-y-6"
            >
              <div className="space-y-2">
                <Label htmlFor="EMAIL" className="text-foreground font-medium">E-mail *</Label>
                <Input 
                  id="EMAIL" 
                  name="EMAIL"
                  type="email" 
                  placeholder="E-mail"
                  className="form-input text-foreground"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="FNAME" className="text-foreground font-medium">Name</Label>
                <Input 
                  id="FNAME" 
                  name="FNAME"
                  type="text" 
                  placeholder="Name"
                  className="form-input text-foreground"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="PHONE" className="text-foreground font-medium">Phone</Label>
                <Input 
                  id="PHONE" 
                  name="PHONE"
                  type="text" 
                  placeholder="Phone"
                  className="form-input text-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="PHONEPREFIX" className="text-foreground font-medium">Phone Prefix</Label>
                <select 
                  id="PHONEPREFIX"
                  name="PHONEPREFIX"
                  className="form-input w-full text-foreground"
                >
                  <option value="1USA">USA (+1)</option>
                  <option value="55BRAZIL">Brazil (+55)</option>
                  <option value="213ALGERIA">Algeria (+213)</option>
                  <option value="376ANDORRA">Andorra (+376)</option>
                  <option value="244ANGOLA">Angola (+244)</option>
                  <option value="1264ANGUILLA">Anguilla (+1264)</option>
                  <option value="1268ANTIGUABARBUDA">Antigua & Barbuda (+1268)</option>
                  <option value="54ARGENTINA">Argentina (+54)</option>
                  <option value="374ARMENIA">Armenia (+374)</option>
                  <option value="297ARUBA">Aruba (+297)</option>
                  <option value="61AUSTRALIA">Australia (+61)</option>
                  <option value="43AUSTRIA">Austria (+43)</option>
                  <option value="994AZERBAIJAN">Azerbaijan (+994)</option>
                  <option value="1242BAHAMAS">Bahamas (+1242)</option>
                  <option value="973BAHRAIN">Bahrain (+973)</option>
                  <option value="880BANGLADESH">Bangladesh (+880)</option>
                  <option value="1246BARBADOS">Barbados (+1246)</option>
                  <option value="375BELARUS">Belarus (+375)</option>
                  <option value="32BELGIUM">Belgium (+32)</option>
                  <option value="501BELIZE">Belize (+501)</option>
                  <option value="229BENIN">Benin (+229)</option>
                  <option value="1441BERMUDA">Bermuda (+1441)</option>
                  <option value="975BHUTAN">Bhutan (+975)</option>
                  <option value="591BOLIVIA">Bolivia (+591)</option>
                  <option value="387BOSNIAHERZEGOVINA">Bosnia Herzegovina (+387)</option>
                  <option value="267BOTSWANA">Botswana (+267)</option>
                  <option value="673BRUNEI">Brunei (+673)</option>
                  <option value="359BULGARIA">Bulgaria (+359)</option>
                  <option value="226BURKINAFASO">Burkina Faso (+226)</option>
                  <option value="257BURUNDI">Burundi (+257)</option>
                  <option value="855CAMBODIA">Cambodia (+855)</option>
                  <option value="237CAMEROON">Cameroon (+237)</option>
                  <option value="1CANADA">Canada (+1)</option>
                  <option value="238CAPEVERDEISLANDS">Cape Verde Islands (+238)</option>
                  <option value="1345CAYMANISLANDS">Cayman Islands (+1345)</option>
                  <option value="236CENTRALAFRICANREPUBLIC">Central African Republic (+236)</option>
                  <option value="56CHILE">Chile (+56)</option>
                  <option value="86CHINA">China (+86)</option>
                  <option value="57COLOMBIA">Colombia (+57)</option>
                  <option value="269COMOROS">Comoros (+269)</option>
                  <option value="242CONGO">Congo (+242)</option>
                  <option value="682COOKISLANDS">Cook Islands (+682)</option>
                  <option value="506COSTARICA">Costa Rica (+506)</option>
                  <option value="385CROATIA">Croatia (+385)</option>
                  <option value="53CUBA">Cuba (+53)</option>
                  <option value="90392CYPRUSNORTH">Cyprus North (+90392)</option>
                  <option value="357CYPRUSSOUTH">Cyprus South (+357)</option>
                  <option value="420CZECHREPUBLIC">Czech Republic (+420)</option>
                  <option value="45DENMARK">Denmark (+45)</option>
                  <option value="253DJIBOUTI">Djibouti (+253)</option>
                  <option value="1DOMINICA">Dominica (+1)</option>
                  <option value="1DOMINICANREPUBLIC">Dominican Republic (+1)</option>
                  <option value="593ECUADOR">Ecuador (+593)</option>
                  <option value="20EGYPT">Egypt (+20)</option>
                  <option value="503ELSALVADOR">El Salvador (+503)</option>
                  <option value="240EQUATORIALGUINEA">Equatorial Guinea (+240)</option>
                  <option value="291ERITREA">Eritrea (+291)</option>
                  <option value="372ESTONIA">Estonia (+372)</option>
                  <option value="251ETHIOPIA">Ethiopia (+251)</option>
                  <option value="500FALKLANDISLANDS">Falkland Islands (+500)</option>
                  <option value="298FAROEISLANDS">Faroe Islands (+298)</option>
                  <option value="679FIJI">Fiji (+679)</option>
                  <option value="358FINLAND">Finland (+358)</option>
                  <option value="33FRANCE">France (+33)</option>
                  <option value="594FRENCHGUIANA">French Guiana (+594)</option>
                  <option value="689FRENCHPOLYNESIA">French Polynesia (+689)</option>
                  <option value="241GABON">Gabon (+241)</option>
                  <option value="220GAMBIA">Gambia (+220)</option>
                  <option value="7880GEORGIA">Georgia (+7880)</option>
                  <option value="49GERMANY">Germany (+49)</option>
                  <option value="233GHANA">Ghana (+233)</option>
                  <option value="350GIBRALTAR">Gibraltar (+350)</option>
                  <option value="30GREECE">Greece (+30)</option>
                  <option value="299GREENLAND">Greenland (+299)</option>
                  <option value="1473GRENADA">Grenada (+1473)</option>
                  <option value="590GUADELOUPE">Guadeloupe (+590)</option>
                  <option value="671GUAM">Guam (+671)</option>
                  <option value="502GUATEMALA">Guatemala (+502)</option>
                  <option value="224GUINEA">Guinea (+224)</option>
                  <option value="245GUINEABISSAU">Guinea - Bissau (+245)</option>
                  <option value="592GUYANA">Guyana (+592)</option>
                  <option value="509HAITI">Haiti (+509)</option>
                  <option value="504HONDURAS">Honduras (+504)</option>
                  <option value="852HONGKONG">Hong Kong (+852)</option>
                  <option value="36HUNGARY">Hungary (+36)</option>
                  <option value="354ICELAND">Iceland (+354)</option>
                  <option value="91INDIA">India (+91)</option>
                  <option value="62INDONESIA">Indonesia (+62)</option>
                  <option value="98IRAN">Iran (+98)</option>
                  <option value="964IRAQ">Iraq (+964)</option>
                  <option value="353IRELAND">Ireland (+353)</option>
                  <option value="972ISRAEL">Israel (+972)</option>
                  <option value="39ITALY">Italy (+39)</option>
                  <option value="1876JAMAICA">Jamaica (+1876)</option>
                  <option value="81JAPAN">Japan (+81)</option>
                  <option value="962JORDAN">Jordan (+962)</option>
                  <option value="7KAZAKHSTAN">Kazakhstan (+7)</option>
                  <option value="254KENYA">Kenya (+254)</option>
                  <option value="686KIRIBATI">Kiribati (+686)</option>
                  <option value="850KOREANORTH">Korea North (+850)</option>
                  <option value="82KOREASOUTH">Korea South (+82)</option>
                  <option value="965KUWAIT">Kuwait (+965)</option>
                  <option value="996KYRGYZSTAN">Kyrgyzstan (+996)</option>
                  <option value="856LAOS">Laos (+856)</option>
                  <option value="371LATVIA">Latvia (+371)</option>
                  <option value="961LEBANON">Lebanon (+961)</option>
                  <option value="266LESOTHO">Lesotho (+266)</option>
                  <option value="231LIBERIA">Liberia (+231)</option>
                  <option value="218LIBYA">Libya (+218)</option>
                  <option value="417LIECHTENSTEIN">Liechtenstein (+417)</option>
                  <option value="370LITHUANIA">Lithuania (+370)</option>
                  <option value="352LUXEMBOURG">Luxembourg (+352)</option>
                  <option value="853MACAO">Macao (+853)</option>
                  <option value="389MACEDONIA">Macedonia (+389)</option>
                  <option value="261MADAGASCAR">Madagascar (+261)</option>
                  <option value="265MALAWI">Malawi (+265)</option>
                  <option value="60MALAYSIA">Malaysia (+60)</option>
                  <option value="960MALDIVES">Maldives (+960)</option>
                  <option value="223MALI">Mali (+223)</option>
                  <option value="356MALTA">Malta (+356)</option>
                  <option value="692MARSHALLISLANDS">Marshall Islands (+692)</option>
                  <option value="596MARTINIQUE">Martinique (+596)</option>
                  <option value="222MAURITANIA">Mauritania (+222)</option>
                  <option value="269MAYOTTE">Mayotte (+269)</option>
                  <option value="52MEXICO">Mexico (+52)</option>
                  <option value="691MICRONESIA">Micronesia (+691)</option>
                  <option value="373MOLDOVA">Moldova (+373)</option>
                  <option value="377MONACO">Monaco (+377)</option>
                  <option value="976MONGOLIA">Mongolia (+976)</option>
                  <option value="1664MONTSERRAT">Montserrat (+1664)</option>
                  <option value="212MOROCCO">Morocco (+212)</option>
                  <option value="258MOZAMBIQUE">Mozambique (+258)</option>
                  <option value="95MYANMAR">Myanmar (+95)</option>
                  <option value="264NAMIBIA">Namibia (+264)</option>
                  <option value="674NAURU">Nauru (+674)</option>
                  <option value="977NEPAL">Nepal (+977)</option>
                  <option value="31NETHERLANDS">Netherlands (+31)</option>
                  <option value="687NEWCALEDONIA">New Caledonia (+687)</option>
                  <option value="64NEWZEALAND">New Zealand (+64)</option>
                  <option value="505NICARAGUA">Nicaragua (+505)</option>
                  <option value="227NIGER">Niger (+227)</option>
                  <option value="234NIGERIA">Nigeria (+234)</option>
                  <option value="683NIUE">Niue (+683)</option>
                  <option value="672NORFOLKISLANDS">Norfolk Islands (+672)</option>
                  <option value="670NORTHERNMARIANAS">Northern Marianas (+670)</option>
                  <option value="47NORWAY">Norway (+47)</option>
                  <option value="968OMAN">Oman (+968)</option>
                  <option value="680PALAU">Palau (+680)</option>
                  <option value="507PANAMA">Panama (+507)</option>
                  <option value="675PAPUANEWGUINEA">Papua New Guinea (+675)</option>
                  <option value="595PARAGUAY">Paraguay (+595)</option>
                  <option value="51PERU">Peru (+51)</option>
                  <option value="63PHILIPPINES">Philippines (+63)</option>
                  <option value="48POLAND">Poland (+48)</option>
                  <option value="351PORTUGAL">Portugal (+351)</option>
                  <option value="1787PUERTORICO">Puerto Rico (+1787)</option>
                  <option value="974QATAR">Qatar (+974)</option>
                  <option value="262REUNION">Reunion (+262)</option>
                  <option value="40ROMANIA">Romania (+40)</option>
                  <option value="7RUSSIA">Russia (+7)</option>
                  <option value="250RWANDA">Rwanda (+250)</option>
                  <option value="378SANMARINO">San Marino (+378)</option>
                  <option value="239SAOTOMEPRINCIPE">Sao Tome & Principe (+239)</option>
                  <option value="966SAUDIARABIA">Saudi Arabia (+966)</option>
                  <option value="221SENEGAL">Senegal (+221)</option>
                  <option value="381SERBIA">Serbia (+381)</option>
                  <option value="248SEYCHELLES">Seychelles (+248)</option>
                  <option value="232SIERRALEONE">Sierra Leone (+232)</option>
                  <option value="65SINGAPORE">Singapore (+65)</option>
                  <option value="421SLOVAKREPUBLIC">Slovak Republic (+421)</option>
                  <option value="386SLOVENIA">Slovenia (+386)</option>
                  <option value="677SOLOMONISLANDS">Solomon Islands (+677)</option>
                  <option value="252SOMALIA">Somalia (+252)</option>
                  <option value="27SOUTHAFRICA">South Africa (+27)</option>
                  <option value="34SPAIN">Spain (+34)</option>
                  <option value="94SRILANKA">Sri Lanka (+94)</option>
                  <option value="290STHELENA">St. Helena (+290)</option>
                  <option value="1869STKITTS">St. Kitts (+1869)</option>
                  <option value="1758STLUCIA">St. Lucia (+1758)</option>
                  <option value="249SUDAN">Sudan (+249)</option>
                  <option value="597SURINAME">Suriname (+597)</option>
                  <option value="268SWAZILAND">Swaziland (+268)</option>
                  <option value="46SWEDEN">Sweden (+46)</option>
                  <option value="41SWITZERLAND">Switzerland (+41)</option>
                  <option value="963SYRIA">Syria (+963)</option>
                  <option value="886TAIWAN">Taiwan (+886)</option>
                  <option value="7TAJIKSTAN">Tajikstan (+7)</option>
                  <option value="66THAILAND">Thailand (+66)</option>
                  <option value="228TOGO">Togo (+228)</option>
                  <option value="676TONGA">Tonga (+676)</option>
                  <option value="1868TRINIDADTOBAGO">Trinidad & Tobago (+1868)</option>
                  <option value="216TUNISIA">Tunisia (+216)</option>
                  <option value="90TURKEY">Turkey (+90)</option>
                  <option value="7TURKMENISTAN">Turkmenistan (+7)</option>
                  <option value="993TURKMENISTAN">Turkmenistan (+993)</option>
                  <option value="1649TURKSCAICOSISLANDS">Turks & Caicos Islands (+1649)</option>
                  <option value="688TUVALU">Tuvalu (+688)</option>
                  <option value="256UGANDA">Uganda (+256)</option>
                  <option value="380UKRAINE">Ukraine (+380)</option>
                  <option value="44UNITEDKINGDOM">United Kingdom (+44)</option>
                  <option value="971UNITEDARABEMIRATES">United Arab Emirates (+971)</option>
                  <option value="598URUGUAY">Uruguay (+598)</option>
                  <option value="7UZBEKISTAN">Uzbekistan (+7)</option>
                  <option value="678VANUATU">Vanuatu (+678)</option>
                  <option value="379VATICANCITY">Vatican City (+379)</option>
                  <option value="58VENEZUELA">Venezuela (+58)</option>
                  <option value="84VIETNAM">Vietnam (+84)</option>
                  <option value="84VIRGINISLANDSBRITISH">Virgin Islands - British (+84)</option>
                  <option value="84VIRGINISLANDSUS">Virgin Islands - US (+84)</option>
                  <option value="681WALLISFUTUNA">Wallis & Futuna (+681)</option>
                  <option value="969YEMENNORTH">Yemen (North) (+969)</option>
                  <option value="967YEMENSOUTH">Yemen (South) (+967)</option>
                  <option value="260ZAMBIA">Zambia (+260)</option>
                  <option value="263ZIMBABWE">Zimbabwe (+263)</option>
                  <option value="599CURAAO">Curaçao (+599)</option>
                </select>
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="btn-premium w-full text-primary-foreground font-semibold py-6 text-lg rounded-xl hover-lift"
                  size="lg"
                >
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Subscribe
                  </div>
                </Button>
              </div>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 card-gradient border-border/50 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-foreground">
                  Contact Information
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background/30 hover:bg-background/50 transition-colors duration-300">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold mb-1">For Enquiries Call:</p>
                    <p className="text-primary font-bold text-lg">+234 701 408 7669</p>
                    <p className="text-sm text-muted-foreground">Available 9AM - 6PM WAT</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-background/30 hover:bg-background/50 transition-colors duration-300">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold mb-1">Website:</p>
                    <p className="text-primary font-bold">www.gvestglobal.com</p>
                    <p className="text-sm text-muted-foreground">Learn more about us</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 card-gradient border-border/50 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-foreground">
                  Follow Us
                </h3>
              </div>
              
              <div className="flex flex-col gap-3">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/50 text-primary hover:bg-primary/10 hover-lift justify-start"
                >
                  <Facebook className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">Gvest</div>
                    <div className="text-sm text-muted-foreground">Facebook Page</div>
                  </div>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/50 text-primary hover:bg-primary/10 hover-lift justify-start"
                >
                  <Instagram className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">@gvestcooperative</div>
                    <div className="text-sm text-muted-foreground">Instagram Handle</div>
                  </div>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/50 text-primary hover:bg-primary/10 hover-lift justify-start"
                >
                  <Twitter className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-semibold">@gvestglobal</div>
                    <div className="text-sm text-muted-foreground">Twitter Handle</div>
                  </div>
                </Button>
              </div>
            </Card>

            <Card className="p-6 card-gradient border-border/50 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground">
                  Why Join?
                </h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  'Network with top investors',
                  'Exclusive business opportunities', 
                  'Premium dining experience',
                  'Strategic partnerships',
                  'Industry insights'
                ].map((benefit, index) => (
                  <li key={benefit} className="flex items-center gap-3 p-2 rounded-lg hover:bg-background/30 transition-colors duration-300">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span className="font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Added urgency indicator */}
            <Card className="p-6 card-gradient border-primary/30 hover-lift">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-500/10 rounded-lg">
                  <Clock className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground">
                  Limited Time
                </h3>
              </div>
              <div className="space-y-2">
                <p className="text-red-400 font-semibold">Early Bird Registration</p>
                <p className="text-sm text-muted-foreground">
                  Secure your spot now - seats are filling up fast for both exclusive events.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
