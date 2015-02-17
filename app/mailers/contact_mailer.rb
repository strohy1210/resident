class ContactMailer < ActionMailer::Base
  default from: "quizzify@gmail.com"

  def contact_us(email, name, phone="no phone", company="no company")
    @name = name
    @email = email
    @phone = phone
    @company = company
    mail(to: 'peter@quizzify.com', subject: "#{name} from #{company} registered on Quizzify.com")
  end
end
