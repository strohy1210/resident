class QuestionsController < ApplicationController

  def demo
    render :layout => 'demo'
  end

  def answer

    @answer = params[:ans]
  end
end
