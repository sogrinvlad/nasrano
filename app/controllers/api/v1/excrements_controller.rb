class Api::V1::ExcrementsController < ApplicationController

  def index
    render json: get_excrements
  end

  def get_excrements(page: 1, per: 10)
    collection = Excrement.order(id: :desc).page(page).per(per)
    res = collection.map{|el| { id: el.id, user_id: el.user_id, user_name: el.user.first_name, shit_out_at: el.shit_out_at} }
    res
  end

  def create
    params = excrement_params
    params.merge!(shit_out_at: Time.now)
    Excrement.create(params)
    render json: get_excrements
  end

  def destroy
    Excrement.destroy(params[:id])
  end

  def update
    fruit = Excrement.find(params[:id])
    fruit.update_attributes(excrement_params)
    render json: fruit
  end

  def radar_data
    data = {}
    Excrement.where('shit_out_at > ?', (Time.now-1.day).utc).each do |exc|
      data[exc.user.first_name] ||= 0
      data[exc.user.first_name] += 1
    end

    response = {
        datasets: [{
                       data: data.values,
                       backgroundColor: %w(#FF6384 #4BC0C0 #FFCE56 #E7E9ED #36A2EB),
                       label: 'My dataset'
                   }],
        labels: data.keys
    }
    render json: response
  end

  private

  def excrement_params
    params.require(:excrement).permit(:user_id)
  end

end