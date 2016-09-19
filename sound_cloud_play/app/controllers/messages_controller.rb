class MessagesController < ApplicationController
  def index
#    messages = Message.all
    messages = Message.find_by_sql(['select * from messages order by id desc'])
    render json: messages
  end

  def create
    message = Message.new(create_params)
    if message.save
      render json: message, status: :created # 201
    else
      render json: message, status: :unprocessable_entity
    end
  end

  private

    def create_params
      params.permit(:user, :text)
    end
end
