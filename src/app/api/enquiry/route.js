// import connectMongo from '../../../../utils/connectMongo';
// import EnquiryModel from '../../../../models/enquiryModel';
// export async function POST(req) {
//   try {
//     console.log(await req.json());
//     // const { name, email, message } = await req.json();
//     // const enquiry = { name, email, message };
//     // await connectMongo();
//     // await EnquiryModel.create(enquiry);
//     return Response.json({ message: 'success' });
//   } catch (error) {
//     return Response.json({ message: error.message });
//   }
// }
import connectMongo from '../../../../utils/connectMongo';
import EnquiryModel from '../../../../models/enquiryModel';
export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    const enquiry = { name, email, message };
    await connectMongo();
    await EnquiryModel.create(enquiry);
    return Response.json({ message: 'Enquiry has ben send ' });
  } catch (error) {
    return Response.json({ message: error.message });
  }
}
