import { Card, CardContent } from "@/components/ui/card";

export function QuranVerse() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <Card className="bg-lime-50 border-lime-200">
          <CardContent className="p-6 text-center">
            <p className="text-xl md:text-2xl font-serif mb-2 text-lime-900">
              وَمَنْ أَحْيَاهَا فَكَأَنَّمَا أَحْيَا النَّاسَ جَمِيعًا
            </p>
            <p className="text-gray-600 italic">
              `&quot;`And whoever saves a life, it will be as if they saved all
              of humanity`&quot;`
            </p>
            <p className="text-gray-500 text-sm mt-1">(Quran 5:32)</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
