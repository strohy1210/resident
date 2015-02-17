class QuestionsController < ApplicationController

  def demo
    render :layout => 'demo'
  end

  def demo_too
    render :layout => 'demo'
  end

  def answer
    @answer = params[:answer]
  end
end
