import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import pic1 from "../Assets/youuu.jpg"

const Services = () => {
  const [isRraFocused, setIsRraFocused] = useState(false);
  const [isIremboFocused, setIsIremboFocused] = useState(false);
  const [isAmafotoFocused, setIsAmafotoFocused] = useState(false);
  const [isGraphicFocused, setIsGraphicFocused] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };
  return (
    <section id="service" className="flex flex-col items-center bg-white rounded-md">
      <div className="headings flex justify-center items-center w-full">
        <h2
          onClick={() => handleServiceClick("rra")}
          onBlur={() => setIsRraFocused(false)}
          className="text-gray-500 font-semibold text-lg p-4 cursor-pointer hover:underline hover:text-blue-500"
        >
          SERVICE ZA RRA
        </h2>
        <h2
          onClick={() => handleServiceClick("irembo")}
          onBlur={() => setIsIremboFocused(false)}
          className="text-gray-500 font-semibold text-lg p-4 cursor-pointer hover:underline hover:text-blue-500"
        >
          SERVICE Z'IREMBO
        </h2>
        <h2 
        onClick={()=> handleServiceClick("amafoto")}
        onBlur={()=>setIsAmafotoFocused(false)}
        className="text-gray-500 font-semibold text-lg p-4 cursor-pointer hover:underline hover:text-blue-500">
          AMAFOTO
        </h2>
        <h2 
        onClick={()=> handleServiceClick("graphics")}
        onBlur={()=>setIsGraphicFocused(false)}
        className="text-gray-500 font-semibold text-lg p-4 cursor-pointer hover:underline hover:text-blue-500">
          GRAPHIC & BRANDING
        </h2>
        <h2 className="text-gray-500 font-semibold text-lg p-4 cursor-pointer hover:underline hover:text-blue-500">
          GUSABA VISA
        </h2>
      </div>
      <div className="body flex flex-col justify-start">
        <div>
          {selectedService==="rra" && (
            <div id="rra" className="flex flex-col">
              <div className="flex justify-start flex-col px-16 py-4 gap-5">
                <p className="font-bold text-start">
                  Menyekanisha imisoro y'imbere mu gihugu
                </p>
                <div className="flex gap-24 w-full justify-between items-center w-full">
                  <div className="flex gap-2 justify-center items-center">
                    <Icon icon="charm:tick" />
                    <p>Imisoro ifatirwa(Withholding Tax)</p>
                  </div>
                  <div className="flex gap-2 justify-center items-center">
                    <Icon icon="charm:tick" />
                    <p>Umusoro kubihembo(TPR/PAYE)</p>
                  </div>
                  <div className="flex gap-2 justify-center items-center">
                    <Icon icon="charm:tick" />
                    <p>Umusoro ku nyongeragaciro(TVA)</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start flex-col px-16 py-4 gap-5">
                <p className="font-bold text-start">
                  Menyekanisha imisoro yeguriwe uturere
                </p>
                <div className="flex gap-24 w-full justify-between items-center w-full">
                  {/* <div className="flex gap-2 justify-center items-center"><Icon icon="charm:tick"/><p>Imisoro ifatirwa(Withholding Tax)</p></div> */}
                  <div className="flex gap-2 justify-center items-center">
                    <Icon icon="charm:tick" />
                    <p>Umusoro w'ipatanti/Trading license</p>
                  </div>
                  <div className="flex gap-2 justify-center items-center">
                    <Icon icon="charm:tick" />
                    <p>Amahoro yo mu isoko/Cleaning fees</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-start flex-col px-16 py-4 gap-5">
                <p className="font-bold text-start">
                  Saba icyemezo cyo kutabamo umwenda w'imisoro/kitusi/RSSB
                </p>
                <div className="flex gap-24 w-full justify-between items-center w-full">
                  {/* <div className="flex gap-2 justify-center items-center"><Icon icon="charm:tick"/><p>Imisoro ifatirwa(Withholding Tax)</p></div>
                             <div className="flex gap-2 justify-center items-center"><Icon icon="charm:tick"/><p>Umusoro kubihembo(TPR/PAYE)</p></div> */}
                  <div className="flex gap-2 justify-center items-center">
                    <Icon icon="charm:tick" />
                    <p>Tax Crearance Certificate</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          {selectedService === "irembo" && (
            <div id="irembo">
              <div className="flex justify-start flex-col px-16 py-4 gap-5">
                <p className="font-bold text-start">Umuryango</p>
                <div className="umuryango flex justify-between items-center gap-7">
                  <div className="flex flex-col gap-3 justify-start items-start w-full">
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">Icyemezo cy'ubupfakazi</p>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">Icyemezo cy'uko utuye</p>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">
                        Icyemezo cy'uwacitse ku icumu rya Jenoside yakorewe
                        abatutsi mu 1994
                      </p>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">Icyemezo cy'uko uri ingaragu</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 justify-start items-start w-full">
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">Serivisi z'ubutane</p>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">Inyandiko yo kwemera umwana</p>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">Inyandiko y'ubwishingire</p>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">Icyemezo cy'izungura</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 justify-start items-start w-full">
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">
                        Icyemezo cy'imibanire yabashyingiranwe
                      </p>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">Serivisi z'amavuko</p>
                    </div>
                    <div className="flex gap-2 justify-start items-start">
                      <Icon icon="charm:tick" />
                      <p className="text-start">Serivisi z'ishyingirwa</p>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">
                        Inyandiko zihabwa uwitabye Imana
                      </p>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">
                        Inyandiko zo kubera umubyeyi umwana utabyaye
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start flex-col px-16 py-4 gap-5">
                <p className="font-bold text-start">Abinjira N'abasohoka</p>
                <div className="umuryango flex justify-between items-center gap-7">
                  <div className="flex flex-col gap-3 justify-start items-start w-full">
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">Kwishyura ibihano</p>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">Kwishyura DPA</p>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">Serivisi CEPGL</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 justify-start items-start w-full">
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">Ubwenegihugu bw'U Rwanda</p>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">
                        Kwimura impushya cyangwa Viza
                      </p>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">Impushya</p>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">Indangamuntu y'umunyamahanga</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 justify-start items-start w-full">
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">
                        Icyangombwa cy'inzira cy'umunyamahanga
                      </p>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">
                        Gusaba pasiporo mu buryo bw'ikoranabuhanga
                      </p>
                    </div>
                    <div className="flex gap-2 justify-start items-start">
                      <Icon icon="charm:tick" />
                      <p className="text-start">Urwandiko rw'inzira</p>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">Gusaba viza</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-start flex-col px-16 py-4 gap-5">
                <p className="font-bold text-start">Irangamimerere</p>
                <div className="umuryango flex justify-between items-center gap-7">
                  <div className="flex flex-col gap-3 justify-start items-start w-full">
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">Gusaba indangamuntu</p>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">Kwiyandikisha mu igitabo cyandikwamo abaturage</p>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">Gusimbuza indagamuntu yataye</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 justify-start items-start w-full">
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">Icyemezo cy'umwirondoro wuzuye</p>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">
                        Icyemezo cyo guhinduza izina
                      </p>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">Gusaba gukosorerwa indangamuntu</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 justify-start items-start w-full">
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">
                        Icyemezo cy'ubwenegihugu
                      </p>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                      <Icon icon="charm:tick" />
                      <p className="text-start">
                        Icyemezo cy'uko umuntu ariho
                      </p>
                    </div>
                    <div className="flex gap-2 justify-start items-start">
                      <Icon icon="charm:tick" />
                      <p className="text-start">Icyemezo gisimbura indangamuntu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
            {selectedService==="amafoto"&&(
                <div id="amafoto" className="flex flex-col justify-start items-start gap-8 p-8">
                    <h2 className="font-bold text-start">Our Gallery</h2>
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-start items-start gap-12">
                            <div className="flex justify-center items-center gap-4 pr-4 rounded-md border border-3 border-gray-400 bg-gray-100">
                                <div className="rounded-md"><img className="rounded-md" src={pic1} alt="" width={75} /></div>
                                <div className="flex flex-col gap-3 justify-center items-start">
                                    <p className="text-lg font-bold">Birthday album</p>
                                    <p>RWF 5,000</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-4 pr-4 rounded-md border border-3 border-gray-400 bg-gray-100">
                                <div className="rounded-md"><img className="rounded-md" src={pic1} alt="" width={75} /></div>
                                <div className="flex flex-col gap-3 justify-center items-start">
                                    <p className="text-lg font-bold">Birthday album</p>
                                    <p>RWF 5,000</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-4 pr-4 rounded-md border border-3 border-gray-400 bg-gray-100">
                                <div className="rounded-md"><img className="rounded-md" src={pic1} alt="" width={75} /></div>
                                <div className="flex flex-col gap-3 justify-center items-start">
                                    <p className="text-lg font-bold">Birthday album</p>
                                    <p>RWF 5,000</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-start items-start gap-12">
                        <div className="flex justify-center items-center gap-4 pr-4 rounded-md border border-3 border-gray-400 bg-gray-100">
                                <div className="rounded-md"><img className="rounded-md" src={pic1} alt="" width={75} /></div>
                                <div className="flex flex-col gap-3 justify-center items-start">
                                    <p className="text-lg font-bold">Birthday album</p>
                                    <p>RWF 5,000</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-4 pr-4 rounded-md border border-3 border-gray-400 bg-gray-100">
                                <div className="rounded-md"><img className="rounded-md" src={pic1} alt="" width={75} /></div>
                                <div className="flex flex-col gap-3 justify-center items-start">
                                    <p className="text-lg font-bold">Birthday album</p>
                                    <p>RWF 5,000</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-start items-start gap-12">
                            <div className="flex justify-center items-center gap-4 pr-4 rounded-md border border-3 border-gray-400 bg-gray-100">
                                <div className="rounded-md"><img className="rounded-md" src={pic1} alt="" width={75} /></div>
                                <div className="flex flex-col gap-3 justify-center items-start">
                                    <p className="text-lg font-bold">Birthday album</p>
                                    <p>RWF 5,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        <div>
            {selectedService==="graphics"&&(
                <div id="graphics" className="flex flex-col justify-start items-start gap-8 p-8">
                    <h2 className="font-bold text-start">Graphic and Branding</h2>
                    <div className="flex flex-col gap-8">
                        <div className="flex justify-start items-start gap-12">
                            <div className="flex justify-center items-center gap-4 pr-4 rounded-md border border-3 border-gray-400 bg-gray-100">
                                <div className="rounded-md"><img className="rounded-md" src={pic1} alt="" width={75} /></div>
                                <div className="flex flex-col gap-3 justify-center items-start w-36">
                                    <p className="text-lg font-bold">Ubukwe</p>
                                    <p>RWF 3,000</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-4 pr-4 rounded-md border border-3 border-gray-400 bg-gray-100">
                                <div className="rounded-md"><img className="rounded-md" src={pic1} alt="" width={75} /></div>
                                <div className="flex flex-col gap-3 justify-center items-start w-36">
                                    <p className="text-lg font-bold">Photoshot</p>
                                    <p>RWF 10,000</p>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-4 pr-4 rounded-md border border-3 border-gray-400 bg-gray-100">
                                <div className="rounded-md"><img className="rounded-md" src={pic1} alt="" width={75} /></div>
                                <div className="flex flex-col gap-3 justify-center items-start w-36">
                                    <p className="text-lg font-bold">Mama</p>
                                    <p>RWF 9,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default Services;
