class Api::MessagesController < ApplicationController

  def create
    m = Message.create(message_params)
    msg = ApplicationMailer.contact_email(m)
    msg.deliver_now
    render :root
  end

  def message_params
    params.require(:message).permit(:name, :email, :body)
  end
end
