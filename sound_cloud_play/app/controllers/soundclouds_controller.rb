class SoundcloudsController < ApplicationController
  def index
    urls = Soundcloud.find_by_sql(['select * from soundclouds order by id desc'])
    render json: urls
  end

  def create
    soundcloud = Soundcloud.new(create_params)
    if soundcloud.save
      render json: soundcloud, status: :created # 201
    else
      render json: soundcloud, status: :unprocessable_entity
    end
  end

  private

    def create_params
      params.permit(:url)
    end
end
