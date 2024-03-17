const companyService = require('./reportdetails.service');

const saveCompany=async(req, res)=> {
  try {
    const { companyName,companyAddress, companyContact,companyEmail,footerAddress,footerContact} = req.body;
    const savedCompany = await companyService.saveCompanyDetails(companyName,companyAddress, companyContact,companyEmail,footerAddress,footerContact);
    console.log(savedCompany)
    res.json(savedCompany);
  } catch (error) {
    console.error('Error saving company details:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const  getAllCompanies=async(req, res)=> {
    try {
      const companies = await companyService.getAllCompanies();
      res.json(companies);
    } catch (error) {
      console.error('Error fetching companies:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  
module.exports = { saveCompany,getAllCompanies };