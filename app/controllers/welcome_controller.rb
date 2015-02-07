class WelcomeController < ApplicationController
  def index
  end

  def brokers

  end

  def privacy

  end

  def terms

  end

  def contact_us
    email = params["email"]
    name = params["name"]
    phone = params["phone"] if params[:phone]
    company = params["company"] if params[:company]
    ContactMailer.contact_us(email, name, phone, company).deliver
    flash[:success] = 'Message sent.'
    redirect_to :back
  end
end
