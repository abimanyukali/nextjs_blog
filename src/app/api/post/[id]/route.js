import connectMongo from '../../../../../utils/connectMongo';
import PostModal from '../../../../../models/postModel';

export  async function GET(req, { params }) {
  try {
    console.log(params);
    await connectMongo();
    const postData = await PostModal.findOne({ _id: params.id });
    return Response.json(postData);
  } catch (error) {
    return Response.json({ message: error.message });
  }
}
