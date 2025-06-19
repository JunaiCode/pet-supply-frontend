// src/components/landing/ContactStoreInfo.tsx
'use client';

import {SectionTitle} from "../../common/SectionTitle";
import { FormContact } from "./FormContact";
import { MapContact } from "./MapContact";


export const ContactStoreInfo = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle title="Contact & Store Info"></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {<FormContact/>}
          {<MapContact/>}
        </div>
      </div>
    </section>
  );
}
