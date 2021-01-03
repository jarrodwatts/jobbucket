import Company from './Company';

export default interface Job {
    jobTitle: string
	jobDescription : string,
	salary: string,
	company: Company,
	languages: string[],
	location: string,
	jobBenefits: string[],
	datePosted: Date,
}