class ApplicationMailer < ActionMailer::Base
  default from: 'eddd.lu@gmail.com'
  layout 'mailer'

  def contact_email(message)
    @message = message
    mail(to: message.email, subject: 'test')
  end
end
